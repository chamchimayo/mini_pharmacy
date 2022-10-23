const PharmacyService = require('../service/pharmacy.service');
const LikesRepository = require('../repository/likes.repository');
const PharmacyLikesRepository = require('../repository/pharmacyLikes.repository');

class LikesService {
    pharmacyService = new PharmacyService();
    likesRepository = new LikesRepository();
    pharmacyLikesRepository = new PharmacyLikesRepository();

    likePharmacy = async (pharmacyNum, userNum) => {
        const currentLike = await this.likesRepository.findLikeOne(pharmacyNum, userNum);
        const findOnePharmacyLike = await this.pharmacyLikesRepository.findOnePharmacyLike(pharmacyNum);

        if(!currentLike) {
            await this.likesRepository.createLike(pharmacyNum, userNum);

            if(!findOnePharmacyLike) {
                await this.pharmacyLikesRepository.createPharmacyLike(pharmacyNum);
            } else {
                await this.pharmacyLikesRepository.pharmacyLikeIncrement(pharmacyNum);
            }

            return { message: "좋아요를 등록했습니다." }
        } else {
            await this.likesRepository.deleteLike(pharmacyNum, userNum);

            if(findOnePharmacyLike.likeCount !== 0) {
                await this.pharmacyLikesRepository.pharmacyLikeDecrement(pharmacyNum);
            }

            return { message: "좋아요를 취소했습니다." }
        }
    }

    getUsersAllLikePharmacy = async (userNum) => {
        const usersLikeList = await this.likesRepository.getUsersAllLikePharmacy(userNum);
        const result = [];
        for(let i = 0; i < usersLikeList.length; i++) {
            let pharmacy = await this.pharmacyService.findOne(usersLikeList[i].pharmacyNum);
            result.push(pharmacy.data.response.body.items);
        }
        return result;
    }
}

module.exports = LikesService;