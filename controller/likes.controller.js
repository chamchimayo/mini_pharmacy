const LikesService = require('../service/likes.service');

class LikesController {
    likesService = new LikesService();

    likePharmacy = async (req, res, next) => {
        try {
            const { pharmacyNum } = req.params;
            const { userNum } =  res.locals.user;

            const result = await this.likesService.likePharmacy(pharmacyNum, userNum);
            res.status(201).send(result);
        } catch (err) {
            next(err);
        }
    }

    getUsersAllLikePharmacy = async (req, res, next) => {
        // try {
            const { userNum } =  res.locals.user;

            const result = await this.likesService.getUsersAllLikePharmacy(userNum);
            res.status(200).send(result);
        // } catch (err) {
        //     next(err);
        // }
    }
}

module.exports = LikesController;