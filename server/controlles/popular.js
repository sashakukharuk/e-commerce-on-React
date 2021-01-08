const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
  try {
    const allPositions = await Position.find()
    const position = allPositions.reduce((acm, item, index) => {
      if (index <= 12) {
       acm.push({_id: item._id, image: item.imgLarge})
      }
      return acm
    }, [])
    res.status(200).json(position)
  } catch (e) {
    errorHandler(res, e)
  }
}
