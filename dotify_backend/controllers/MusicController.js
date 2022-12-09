const { Music } = require('../models')

const getMusic = async (req, res) => {
  try {
    const music = await Music.findAll()
    res.send(music)
  } catch (error) {
    throw error
  }
}

const createMusic = async (req, res) => {
  try {
    const newSong = await Music.create()
    res.send(newSong)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getMusic,
  createMusic
}
