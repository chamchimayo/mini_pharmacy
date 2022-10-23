const { Likes, PharmacyLikes } = require('../models')

class LikesRepository {
    findLikeOne = async (pharmacyNum, userNum) => {
        const currentLike = await Likes.findOne({where: {pharmacyNum, userNum}});
        return currentLike;
    };

    createLike = async (pharmacyNum, userNum) => {
        await Likes.create({ pharmacyNum, userNum })
        return;
    };

    deleteLike = async (pharmacyNum, userNum) => {
        await Likes.destroy({ where: {pharmacyNum, userNum} })
        return;
    };
}

module.exports = LikesRepository;