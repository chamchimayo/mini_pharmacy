const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware')

const UsersController = require("../controller/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUsers);
router.post("/login", usersController.loginUsers);
router.post("/checkDuplicatedId", usersController.checkDuplicatedId);
router.get("/", authMiddleware, usersController.getUsersInfo);
router.put("/:userId",authMiddleware, usersController.updateUser);
router.delete("/:userId",authMiddleware, usersController.deleteUser);

module.exports = router;