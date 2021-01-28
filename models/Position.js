const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  description: {
    type: String,
    required: true
  },
  imgMain: {
    type: String,
    required: true
  },
  imgLarge: {
    type: String,
    required: true
  },
  imgSmall: [
    {img: {type: String}}
  ],
  categoryId: {
    ref: 'categories',
    type: Schema.Types.ObjectID
  }
})

module.exports = mongoose.model('positions', positionSchema)
