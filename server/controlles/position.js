const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')
module.exports.getById = async (req, res) => {
  try {
    const position = await Position.findById(req.params.id)
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  const arrayImg = req.files['imageSmall']
  try {
    const position = await new Position({
      name: req.body.name,
      price: req.body.price,
      size: req.body.size,
      description: req.body.description,
      imgMain: req.files['imageMain'] ? req.files['imageMain'][0].path : '',
      imgLarge: req.files['imageLarge'] ? req.files['imageLarge'][0].path : '',
      imgSmall: arrayImg.length !== 0 ? arrayImg.map(f => {return {img: f.path}}) : '',
      categoryId: req.body.categoryId
    }).save()
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}
