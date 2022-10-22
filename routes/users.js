const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware')

const UsersController = require("../controller/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUsers);
router.post("/login", usersController.loginUsers);
router.patch("/:userId",authMiddleware, usersController.updateUsers);
router.delete("/:userId",authMiddleware, usersController.deleteUsers);

module.exports = router;