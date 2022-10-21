'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey:"userId",
        onDelete: "CASCADE",
      })
    }
  }
  Reviews.init({
    reviewNum: {
      primaryKey: true,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    pharmacyId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    userId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    imageUrl: {
      type:DataTypes.STRING,
      allowNull:false
    },
    review: {
      type:DataTypes.STRING,
      allowNull:false
    },

  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};