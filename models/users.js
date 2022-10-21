'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Likes,{foreignKey:"userNum",sourceKey:"userNum"});
      Users.hasMany(models.Reviews,{foreignKey:"userNum",sourceKey:"userNum"});
    }
  }
  Users.init({
    userNum: {
      primaryKey: true,
      autoIncrement:true,
      type: DataTypes.INTEGER,
    },
    userId : {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    nickname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    }, 
    gender: {
      type: DataTypes.INTEGER,
      allowNull:true,
      // validate: {
      //   isin: [[0, 1]]
      // }
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};