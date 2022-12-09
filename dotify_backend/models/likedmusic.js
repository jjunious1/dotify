'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class LikedMusic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  LikedMusic.init(
    {
      musicId: DataTypes.INTEGER,
      references: {
        model: 'music',
        key: 'id'
      },
      userId: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    {
      sequelize,
      modelName: 'LikedMusic',
      tableName: 'liked_music'
    }
  )
  return LikedMusic
}
