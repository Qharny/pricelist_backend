const express = require('express');
const { 
  createProduct, 
  getProducts, 
  getProductById,
  updateProduct,
  deleteProduct 
} = require('../controllers/productController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

router.put('/:id',
  authMiddleware,
  updateProduct
);

router.post('/',
  authMiddleware,
  roleMiddleware(['admin']),
  createProduct
);

router.delete('/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  deleteProduct
);

module.exports = router;