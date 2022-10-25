'use strict';
const {
Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Likes.belongsTo(models.Users, {
        foreignKey: "userNum",
        targetKey:"userNum",
        onDelete: "CASCADE",
      });
      Likes.belongsTo(models.PharmacyLikes, {
        foreignKey: "pharmacyNum",
        targetKey: "pharmacyNum",
      });
  }
}
  Likes.init({
    likeNum: {
      primaryKey: true,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    userNum: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    pharmacyNum: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};