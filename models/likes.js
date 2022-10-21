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
// Likes.belongsTo(models.PharmacyLikes, {
// foreignKey: "pharmacyId",
// targetKey:"pharmacyId",
// })
}
}
  Likes.init({
    id: {
      primaryKey: true,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    pharmacyId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};