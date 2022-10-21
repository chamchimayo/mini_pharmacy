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
      Users.hasMany(models.PharmacyLikes,{foreignKey:"userId",sourceKey:"userId"});
      Users.hasMany(models.Reviews,{foreignKey:"userId",sourceKey:"userId"});
    }
  }
  Users.init({
    id: {
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
    hashedPw: {
      type:DataTypes.STRING,
      allowNull:false
    }, 
    salt: {
      type:DataTypes.STRING,
      allowNull:false
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    address:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};