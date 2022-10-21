'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.Users, {
        foreignKey: "UserId",
        targetKey:"UserId",
        onDelete: "CASCADE",
      })
    }
  }
  Comments.init({
    id: {
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
    comment: {
      type:DataTypes.STRING,
      allowNull:false
    },

  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};