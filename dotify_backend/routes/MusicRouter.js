const router = require('express').Router()
const controller = require('../controllers/MusicController')

router.get('/', controller.getMusic)
router.post('/', controller.createMusic)
router.delete('/', controller.deleteMusic)

module.exports = router
