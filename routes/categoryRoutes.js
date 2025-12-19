const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/", protect, admin, createCategory);
router.get("/", getCategories);
router.delete("/:id", protect, admin, deleteCategory);

module.exports = router;
