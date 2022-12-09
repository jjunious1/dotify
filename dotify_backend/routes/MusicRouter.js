const router = require('express').Router()
const controller = require('../controllers/MusicController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getMusic
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createMusic
)
router.delete(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteMusic
)

module.exports = router
