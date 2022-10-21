const express = require('express');
const router = express.Router();

const SignupController = require("../controller/users.controller");
const signupController = new SignupController();

router.post("/", signupController.SignupUser);

module.exports = router;