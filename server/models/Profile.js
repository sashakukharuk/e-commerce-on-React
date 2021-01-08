const mongoose = require('mongoose')
const Schema = mongoose.Schema
const profileSchema = new Schema({
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
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectID
  }
})

module.exports = mongoose.model('profiles', profileSchema)
