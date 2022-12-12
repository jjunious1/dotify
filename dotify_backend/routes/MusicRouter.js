const router = require('express').Router()
const controller = require('../controllers/MusicController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getMusic
)
//used only on backend
router.post('/', controller.createMusic)
router.delete('/', controller.deleteMusic)

module.exports = router
