'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PharmacyLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // PharmacyLikes.hasMany(models.Likes,{foreignKey:"pharmacyNum",sourceKey:"pharmacyNum"}); 
    }
  }
  PharmacyLikes.init({
    PharmacyLikeNum: {
      primaryKey: true,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    pharmacyNum: {
      type:DataTypes.STRING,
      allowNull:false
    },
    likeCount: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'PharmacyLikes',
  });
  return PharmacyLikes;
};