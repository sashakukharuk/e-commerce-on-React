const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chartSchema = new Schema({
  senderId: {
    type: String,
    required: true
  },
  recipientId: {
    type: String,
    required: true
  },
  messages: [{
    senderId: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }]
})

module.exports = mongoose.model('chart', chartSchema)
