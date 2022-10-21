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
        foreignKey: "userNum",
        targetKey:"userNum",
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
    pharmacyNum: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userNum:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    review: {
      type:DataTypes.STRING,
      allowNull:false
    },
    // imageUrl: {
    //   type:DataTypes.STRING,
    //   allowNull:false
    // },

  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};