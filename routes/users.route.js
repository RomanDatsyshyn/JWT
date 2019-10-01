const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// @route   POST users/register/
// @desc    Registar new user
// @access  Public
router.post("/register", userController.create);

// @route   POST users/authenticate/
// @desc    Authentication
// @access  Public
router.post("/authenticate", userController.authenticate);

module.exports = router;
