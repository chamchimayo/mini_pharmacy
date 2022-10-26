const express = require('express');
const router = express.Router();

const ReviewController = require('../controller/reviews.controller');

const reviewController = new ReviewController();

// const authMiddleware = require('../middlewares/auth-middleware'); // 인증 미들웨어


router.route("/:pharmacyNum")
    .get(reviewController.getAllReview)
        // 댓글 작성 API
    .post(reviewController.createReview)

//댓글 수정 API

router.route('/:reviewNum')
    .patch(reviewController.updateReview)
// 댓글 삭제 API
    .delete(reviewController.deleteReview)

module.exports = router;