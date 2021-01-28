const Profile = require('../models/Profile')
const errorHandler = require('../utils/errorHandler')
const removeUser = require('../controlles/auth')
module.exports.getById = async (req, res) => {
  try {
    const profile = await Profile.findOne({userId: req.user.id})
    res.status(200).json(profile)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  try {
    const position = await new Profile({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      userId: req.body.userId
    }).save()
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
    await removeUser.remove(req.body.userId, res)
  }
}
