const LikesRepository = require('../repository/likes.repository')

class LikesService {
    likesRepository = new LikesRepository();

    likePharmacy = async (pharmacyNum, userNum) => {
        const currentLike = await this.likesRepository.findLikeOne(pharmacyNum, userNum);

        if(!currentLike) {
            await this.likesRepository.createLike(pharmacyNum, userNum);
            return { message: "게시글에 좋아요를 등록했습니다." }
        } else {
            await this.likesRepository.deleteLike(pharmacyNum, userNum);
            return { message: "게시글에 좋아요를 취소했습니다." }
        }
    }
}

module.exports = LikesService;