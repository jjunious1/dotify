'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Music.hasMany(models.LikedMusic, { foreignKey: 'musicId', as: 'songs' })
      // define association here
    }
  }
  Music.init(
    {
      artists_name: DataTypes.STRING,
      genre: DataTypes.ARRAY(DataTypes.STRING),
      music_file: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Music',
      tableName: 'music'
    }
  )
  return Music
}
