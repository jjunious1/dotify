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
    const newSong = await Music.create(req.body)
    res.send(newSong)
  } catch (error) {
    throw error
  }
}

const deleteMusic = async (req, res) => {
  try {
    const { id } = req.body
    await Music.destroy({ where: { id: id } })
    res.send({ msg: 'Song was deleted successfully' })
  } catch (error) {
    throw error
  }
}
module.exports = {
  getMusic,
  createMusic,
  deleteMusic
}
