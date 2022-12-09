const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        dotifyId: req.body.dotifyId
      }
    })
    res.send({ msg: 'User was successfully deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  DeleteUser
}
