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
      Music.hasMany(models.LikeMusic, { foreignKey: 'musicId' })
      // define association here
    }
  }
  Music.init(
    {
      artists_name: DataTypes.STRING,
      genre: DataTypes.ARRAY,
      music_file: {
        type: BLOB,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Music',
      tableName: 'music'
    }
  )
  return Music
}
