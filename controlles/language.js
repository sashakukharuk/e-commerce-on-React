const Language = require('../models/Language')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async (req, res) => {
  try {
    const language = await new Language({
      name: req.body.name,
      language: req.body.language
    }).save()
    res.status(200).json(language)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.get = async (req, res) => {
  try {
    const language = await Language.findOne({name: req.params.name})
    res.status(200).json(language)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const language = await Language.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
    res.status(200).json(language)
  } catch (e) {
    errorHandler(res, e)
  }
}
