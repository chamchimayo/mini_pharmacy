const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware')

const UsersController = require("../controller/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUsers);
router.get('/:userNum',authMiddleware,usersController.getUsersInfo);
router.post("/login", usersController.loginUsers);
router.put("/:userNum",authMiddleware, usersController.updateUsers);
router.delete("/:userNum",authMiddleware, usersController.deleteUsers);

module.exports = router;