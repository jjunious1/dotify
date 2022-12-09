const { User } = require('../models/user')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({})
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers
}
