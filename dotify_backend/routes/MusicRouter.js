const router = require('express').Router()
const controller = require('../controllers/MusicController')

router.get('/', controller.getMusic)
router.post('/', controller.createMusic)

module.exports = router
