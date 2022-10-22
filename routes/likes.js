const express = require("express");
const router = express.Router();

const LikesController = require('../controller/likes.controller');
const likesController = new LikesController();

router.put("/:pharmacyNum", likesController.likePharmacy);

module.exports = router;