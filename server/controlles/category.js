const Category = require('../models/Categories')
const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getCategoryId = async (req, res) => {
  const query = {
    categoryId: req.params.id
  }
  if (req.query.from) {
    query.price = {
      $gte: req.query.from
    }
  }
  if (req.query.to) {
    t = 5
    if (!query.price) {
      query.price = {}
    }
    query.price['$lte'] = req.query.to
  }
  if (req.query.size) {
    query.size = req.query.size
  }
  try {
    const position = await Position.find(query)
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  try {
    const category = await new Category({name: req.body.name}).save()
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
