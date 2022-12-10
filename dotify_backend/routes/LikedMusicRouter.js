const router = require('express').Router()
const controller = require('../controllers/LikedMusicController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetMySongs
)
router.post('/', controller.GetMusic)

router.delete(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.removeSong
)

//used only on backend
router.get('/songs', controller.GetSongs)

module.exports = router
