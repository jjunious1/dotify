const { LikedMusic, Music, User } = require('../models')
// const { Op } = require('sequelize')

const GetMusic = async (req, res) => {
  try {
    const liked = await LikedMusic.create(req.body)
    res.send(liked)
  } catch (error) {
    throw error
  }
}

const GetMySongs = async (req, res) => {
  try {
    const songs = await User.findAll({
      where: { id: req.body.id },
      include: [{ model: Music, as: 'songs' }]
    })
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const removeSong = async (req, res) => {
  try {
    await LikedMusic.destroy({ where: { id: req.body.id } })
    res.send({ msg: 'This song was removed from your playlist' })
  } catch (error) {
    throw error
  }
}

const GetSongs = async (req, res) => {
  try {
    const allSongs = await LikedMusic.findAll()
    res.send(allSongs)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetMusic,
  GetMySongs,
  removeSong,
  GetSongs
}
