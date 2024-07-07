const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  allUser,
} = require("../controllers/authController.js");
const protect = require("../middlewares/logincheck");

router.get("/register", registerUser);
router.get("/logout", logoutUser);
router.get("/login", loginUser);
router.get("/profile", protect, getUser);
router.get("/alluser", allUser);

module.exports = router;
