const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        username: user.username,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
};

exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // check new user
        const user = new User({
            username, password, role
        });
        await user.save();

        // generate token
        const token = generateToken(user);

        res.statu(201).json({
            message: 'User resgistered successfully',
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        });
    };

    exports.login = async (req, res) => {
        try {
            const { username, password } = req.body;

            // check user
            const user = await User.findOne({ username });
            if (!user) {
                throw new Error('User not found');
            }

            // check password
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                throw new Error('Invalid password');
            }

            // generate token
            const token = generateToken(user);

            res.status(200).json({
                message: 'User logged in successfully',
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    role: user.role
                }
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error logging in user',
                error: error.message
            });
        };
    };
};

