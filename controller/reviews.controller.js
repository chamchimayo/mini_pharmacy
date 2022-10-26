const ReviewService = require('../service/reviews.service');
const Joi = require('joi');


//  유효성 검사
const schema = Joi.object().keys({
    pharmacyNum:Joi.string().min(1),
    userNum:Joi.number().min(1),
    imageUrl: Joi.string().min(0),
    review: Joi.string().min(1)
});

class ReviewsController {
    constructor() {
        this.ReviewService = new ReviewService();
    }
    getAllReview = async (req,res, next) => {
        try {
            const { pharmacyNum } = req.params;
            const reviewList = await this.ReviewService.getAllReview(pharmacyNum)
            res.status(200).json({data:reviewList});
        } catch (err) {
            next(err);
        }


    }

    createReview = async (req, res, next) => {
        try {
            const { pharmacyNum } = req.params;
            // const { userNum } = res.locals.user;
            const { userNum,imageUrl, review } = await schema.validateAsync(req.body)

            const createReview = await this.ReviewService.createReview(
                pharmacyNum,
                userNum,
                imageUrl,
                review
            );

            res.status(201).json({ data: createReview });
        } catch (err) {
            next(err);
        }
    };

    updateReview = async (req, res, next) => {
        try {
            const { reviewNum } = req.params;
            // const { userNum } = res.locals.user;
            const {userNum, review } = await schema.validateAsync(req.body)          

            const updateReview = await this.ReviewService.updateReview(
                reviewNum,
                userNum,               
                review
            );

            res.status(200).json({ data: updateReview });
        } catch (err) {
            next(err);
        }
    };

    deleteReview = async (req, res, next) => {
        try {
            const { reviewNum } = req.params;
            // const { userNum } = res.locals.user;
            const { userNum } = req.body;

            const deleteReview = await this.ReviewService.deleteReview(
                reviewNum,
                userNum
            );

            res.status(200).json({ data: deleteReview });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ReviewsController;