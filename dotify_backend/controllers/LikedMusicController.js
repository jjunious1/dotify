const { LikedMusic, Music, User } = require('../models')

const AddLike = async (req, res) => {
  try {
    const findOne = await LikedMusic.findOne({ where: req.body })
    if (findOne) {
      res.send({
        msg: 'You already liked this song. Please remove liked song or add another'
      })
    } else {
      const liked = await LikedMusic.create(req.body)
      res.send(liked)
    }
  } catch (error) {
    throw error
  }
}

const GetMySongs = async (req, res) => {
  try {
    const songs = await User.findAll({
      where: { id: req.params.id },
      include: [{ model: Music, as: 'songs' }]
    })
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const removeSong = async (req, res) => {
  try {
    const findOne = await LikedMusic.findOne({ where: req.body })
    if (findOne) {
      await LikedMusic.destroy({ where: req.body })
      res.send({ msg: 'This song was removed from your playlist' })
    } else {
      res.send({ msg: 'this song is no longer here' })
    }
  } catch (error) {
    throw error
  }
}

const GetAllSongs = async (req, res) => {
  try {
    const allSongs = await LikedMusic.findAll()
    res.send(allSongs)
  } catch (error) {
    throw error
  }
}
module.exports = {
  AddLike,
  GetMySongs,
  removeSong,
  GetAllSongs
}
