const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 */
router.post("/login", loginUser);

module.exports = router;
