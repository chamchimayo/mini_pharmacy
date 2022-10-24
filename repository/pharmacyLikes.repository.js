const { PharmacyLikes } = require('../models');

class PharmacyLikesRepository {
    findOnePharmacyLike = async (pharmacyNum) => {
        const findOnePharmacyLike = await PharmacyLikes.findOne({ where: { pharmacyNum } })
        return findOnePharmacyLike;
    }

    createPharmacyLike = async (pharmacyNum) => {
        await PharmacyLikes.create({ pharmacyNum, likeCount: 1 });
    }

    pharmacyLikeIncrement = async (pharmacyNum) => {
        await PharmacyLikes.increment({ likeCount: 1 }, { where: { pharmacyNum } })
        return;
    }

    pharmacyLikeDecrement = async (pharmacyNum) => {
        await PharmacyLikes.decrement({ likeCount: 1 }, { where: { pharmacyNum } })
        return;
    }
}

module.exports = PharmacyLikesRepository;