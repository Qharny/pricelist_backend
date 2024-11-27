const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = await Product.create({ name, price, quantity });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};