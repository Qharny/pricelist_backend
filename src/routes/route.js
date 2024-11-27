const express = require('express');
const { register, login } = require('../controllers/authController');
const { authMiddleware, roleMiddleware } = require('../middleware/main');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

router.get('/admin-only', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Admin access granted' });
});

module.exports = router;