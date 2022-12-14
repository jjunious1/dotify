const router = require('express').Router()
const controller = require('../controllers/LikedMusicController')
const middleware = require('../middleware')

//CRD
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetMySongs
)
router.post('/', controller.AddLike)

router.delete(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.removeSong
)

//used only on backend
router.get('/songs', controller.GetAllSongs)

module.exports = router
