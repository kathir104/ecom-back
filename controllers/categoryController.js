const Category = require("../models/categoryModel");

// @desc Create category
const createCategory = async (req, res) => {
  const { name, description } = req.body;

  const category = await Category.create({ name, description });
  res.status(201).json(category);
};

// @desc Get all categories
const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

// @desc Delete category
const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category removed" });
};

module.exports = { createCategory, getCategories, deleteCategory };
