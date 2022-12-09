const router = require('express').Router()
const controller = require('../controllers/LikedMusicController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSongs
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.likedMusic
)

module.exports = router
