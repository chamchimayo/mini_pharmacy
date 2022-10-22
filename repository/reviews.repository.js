const { Reviews } = require('../models');

class ReviewRepository {
    constructor() {
        this.Reviews = Reviews;
    }

    findOne = async (option) => {
        return await Reviews.findOne(option)
    }
    

    save = async (option) => { // 인자를 넘길때 서비스단에서 가공해서 간단하게 넘겨주는게 좋다
        
        return await option.save();
    };

    update = async(option) => {
        return await Reviews.option
    }

    destroy = async (option) => {
        return await this.Reviews.destroy(option);
    };
}

module.exports = ReviewRepository;
