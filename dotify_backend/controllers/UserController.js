const { User } = require('../models')

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send({ msg: 'User was successfully deleted' })
  } catch (error) {
    throw error
  }
}

// used for backend
const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  DeleteUser
}
