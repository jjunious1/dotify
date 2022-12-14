const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')
const controller2 = require('../controllers/UserController')

//full Crud
router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put('/update', controller.updatePassword)
router.get('/', controller2.GetUsers)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller2.DeleteUser
)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
