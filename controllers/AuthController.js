const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { dotifyId: req.body.dotifyId },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        dotifyId: user.dotifyId
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized User' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name, dotifyId } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, passwordDigest, name, dotifyId })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { dotifyId: req.body.dotifyId },
      raw: true
    })
    const { password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    if (user && passwordDigest !== user.passwordDigest) {
      const update = await User.update(
        { passwordDigest },
        {
          where: {
            passwordDigest: user.passwordDigest
          }
        }
      )
      res.send(update)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  updatePassword,
  CheckSession
}
