const { User } = require('../models/user')

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
    const user = await User.findById(req.body.id)
    await user.destroy()
    res.send({ msg: 'User was successfully deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  DeleteUser
}
