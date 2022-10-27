const { Reviews } = require('../models');
const ReviewRepository = require('../repository/reviews.repository');

class ReviewService {
    constructor(){
        this.reviewRepository = new ReviewRepository;
    }

    getAllReview = async (pharmacyNum) => {
        const option = {where:{pharmacyNum}}
        const reviewList = await this.reviewRepository.getAllReview(option)

        if (reviewList.length) {
            return reviewList;
        } else {
            throw new Error('리뷰 목록을 불러오는 중 오류가 발생했습니다.');
        }
    }

    createReview = async ( pharmacyNum,userNum,imageUrl,review) => {
        const option = Reviews.build({pharmacyNum,userNum,imageUrl,review})
        const createReview = await this.reviewRepository.save(option);

        if (createReview) {
            return createReview;
        } else {
            throw new Error('저장 중 오류가 발생했습니다.');
        }
    };
    
    updateReview = async (reviewNum,userNum,review) => {

        const [updateReview] = await this.reviewRepository.update(reviewNum,userNum,review);

        if (updateReview) {
            return '댓글 수정 완료';
        } else {
            throw new Error('수정 권한이 없습니다');
        }
    };

    deleteReview = async (reviewNum,userNum) => {

        const option = {where: {reviewNum,userNum}}
        const deleteReview = await this.reviewRepository.destroy(option);
        if (deleteReview) {
            return '댓글 삭제 완료';
        } else {
            throw new Error('권한이없거나 이미 삭제된 댓글입니다');
        }
    };
}

module.exports = ReviewService;