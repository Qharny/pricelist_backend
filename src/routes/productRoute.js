const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', 
  authMiddleware, 
  roleMiddleware(['admin']), 
  createProduct
);

router.get('/', getProducts);

module.exports = router;