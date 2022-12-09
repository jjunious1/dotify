const { LikedMusic, Music, User } = require('../models')

const likedMusic = async (req, res) => {
  try {
    const liked = await LikedMusic.create(req.body)
    res.send(liked)
  } catch (error) {
    throw error
  }
}

const GetSongs = async (req, res) => {
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

module.exports = {
  likedMusic,
  GetSongs
}
