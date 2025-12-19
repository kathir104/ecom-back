const Product = require("../models/productModel");

// @desc Create product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

// @desc Get all products
const getProducts = async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
};

// @desc Get product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");

  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error("Product not found");
  }
};

// @desc Update product
const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
};

// @desc Delete product
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
