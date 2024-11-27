const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    let existingUser = await User.findOne({ $or: [{ username }, { password }] });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = new User({ username, password, role });
    await user.save();
    const token = generateToken(user);
    res.status(201).json({ message: 'User registered', token, user: { id: user._id, username, role } });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
};