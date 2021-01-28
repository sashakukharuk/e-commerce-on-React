const Contacts = require('../models/Contacts')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
  try {
    const contacts = await Contacts.findOne()
    res.status(200).json(contacts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  try {
    const contacts = await new Contacts({
      email: req.body.email,
      phone: req.body.phone,
    }).save()
    res.status(200).json(contacts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const contacts = await Contacts.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {new: true}
    )
    res.status(200).json(contacts)
  } catch (e) {
    errorHandler(res, e)
  }
}
