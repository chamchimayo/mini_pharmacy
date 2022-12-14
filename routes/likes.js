const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const LikesController = require('../controller/likes.controller');
const likesController = new LikesController();

router.put("/:pharmacyNum", authMiddleware, likesController.likePharmacy);
router.get("/:userNum", authMiddleware, likesController.getUsersAllLikePharmacy);

module.exports = router;