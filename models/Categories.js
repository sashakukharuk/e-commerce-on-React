const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
  name: {
    ua: {
      type: String,
      required: true
    },
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  }

})

module.exports = mongoose.model('categories', categoriesSchema)
