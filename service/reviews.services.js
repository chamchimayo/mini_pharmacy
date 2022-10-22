const { sequelize,Reviews } = require('../models');
const ReviewRepository = require('../repository/reviews.repository');

class ReviewService {
    reviewRepository = new ReviewRepository();

    createReview = async ( pharmacyNum,userNum,imageUrl,review) => {
        const option = Reviews.build({pharmacyNum,userNum,imageUrl,review})
        const createReview = await this.reviewRepository.save(option);

        if (createReview) {
            return createReview;
        } else {
            throw new Error('저장 중 오류가 발생했습니다.');
        }
    };
    updateReview = async (ReviewNum,userNum,content) => {

        const option = sequelize.query(`
        UPDATE Reviews SET content = ${content}
        WHERE ReviewNum = ${ReviewNum}
        AND userId = ${userNum}
         `)

        const updateReview = await this.reviewRepository.update(option);

        if (updateReview) {
            return '댓글 수정이 완료';
        } else {
            throw new Error('댓글 수정 권한이 없으시군요 댓글이없거나');
        }
    };

    deleteReview = async (ReviewNum,userId) => {
        const option = {where: {ReviewNum,userId}}
        const deleteReview = await this.reviewRepository.destroy(option);
        if (deleteReview) {
            return '댓글 파괴 완료;;';
        } else {
            throw new Error('댓글 수정 권한이 없으시군요 댓글이없거나');
        }
    };
}
module.exports = ReviewService;
