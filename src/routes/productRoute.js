const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/',
  authMiddleware,
  roleMiddleware(['admin']),
  createProduct
);

router.get('/', getProducts);
router.get('/:id', getProductById);

router.put('/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  updateProduct
);

router.delete('/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  deleteProduct
);

module.exports = router;