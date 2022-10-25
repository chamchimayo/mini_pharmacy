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
      PharmacyLikes.hasMany(models.Likes,{foreignKey:"pharmacyNum", sourceKey:"pharmacyNum"});
    }
  }
  PharmacyLikes.init({
    pharmacyNum: {
      primaryKey: true,
      type: DataTypes.STRING,
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