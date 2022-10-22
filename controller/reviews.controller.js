const ReviewService = require('../service/reviews.services');

class ReviewsController {
    constructor() {
        this.ReviewService = new ReviewService();
    }
    createReview = async (req, res, next) => {
        try {
            // const { pharmacyNum } = req.params;
            // const { userNum } = res.locals.user;
            const { pharmacyNum,userNum,imageUrl, review } = req.body;

            const createReview = await this.ReviewService.createReview(
                pharmacyNum,
                userNum,
                imageUrl,
                review
            );

            res.status(200).json({ data: createReview });
        } catch (err) {
            next(err);
        }
    };

    updateReview = async (req, res, next) => {
        try {
            const { ReviewNum } = req.params;
            // const { userNum } = res.locals.user;
            const { userNum, content } = req.body;

            const updateReview = await this.ReviewService.updateReview(
                ReviewNum,
                userNum,               
                content
            );

            res.status(200).json({ data: updateReview });
        } catch (err) {
            next(err);
        }
    };

    deleteReview = async (req, res, next) => {
        try {
            const { ReviewNum } = req.params;
            const { userNum } = res.locals.user;

            const deleteReview = await this.ReviewService.deleteReview(
                ReviewNum,
                userNum
            );

            res.status(200).json({ data: deleteReview });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = ReviewsController;
