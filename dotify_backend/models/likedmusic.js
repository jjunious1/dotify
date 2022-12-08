'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class LikedMusic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LikedMusic.init(
    {
      liked: DataTypes.BOOLEAN,
      musicId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'LikedMusic',
      tableName: 'likedmusics'
    }
  )
  return LikedMusic
}
