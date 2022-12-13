const { Music } = require('../models')

const getMusic = async (req, res) => {
  try {
    const music = await Music.findAll()
    res.send(music)
  } catch (error) {
    throw error
  }
}

// for filling out database
const createMusic = async (req, res) => {
  try {
    const newSong = await Music.bulkCreate(req.body)
    res.send(newSong)
  } catch (error) {
    throw error
  }
}

const updateMusic = async (req, res) => {
  try {
    const update = await Music.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.send(update)
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
  deleteMusic,
  updateMusic
}
