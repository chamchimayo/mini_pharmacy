const express = require('express');
const router = express.Router();

const UsersController = require("../controller/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUsers);
router.post("/login", usersController.loginUsers);
router.patch("/signup", usersController.updateUsers);
router.delete("/signup", usersController.deleteUsers);

module.exports = router;