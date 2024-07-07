const express = require("express");
const router = express.Router();
const google = require("../controller/authController");

router.get("/google", google);

module.exports = router;
