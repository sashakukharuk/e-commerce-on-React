const Chart = require('../models/Chart')
const config = require('../config/keys.dev')
const errorHandler = require('../utils/errorHandler')

module.exports.findChart = async (id) => {
  try {
    return Chart.find({recipientId: id})
  } catch (e) {
    console.log(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const charts = await Chart.findById(req.params.id)
    res.status(200).json(charts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createChart = async (body) => {
  try {
    return await new Chart({
      senderId: config.adminId,
      recipientId: body.recipientId,
      messages: {senderId: config.adminId, message: config.message}
    }).save()
  } catch (e) {
    console.log(e)
  }
}

module.exports.createMessage = async (body) => {
  try {
    let newChart = {}
    const chart = await Chart.findById(body.id)
    if (chart) {
      chart.messages.push(body.message)
      newChart = chart.save()
    }
    return newChart
  } catch (e) {
    console.log(e)
  }
}
