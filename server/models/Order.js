const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  order: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  novaPosh: {
    type: String,
    required: true
  },
  list: [
    {
      positionId: {
        ref: 'positions',
        type: Schema.Types.ObjectID,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('orders', orderSchema)
