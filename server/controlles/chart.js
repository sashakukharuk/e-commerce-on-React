const Chart = require('../models/Chart')
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
      senderId: body.senderId,
      recipientId: body.recipientId,
      messages: body.messages
    }).save()
  } catch (e) {
    console.log(e)
  }
}

module.exports.createMessage = async (body) => {
  try {
    const chart = await Chart.findById(body.id)
    if (chart) {
      const messages = chart.messages
      const update = messages.map(item => {
        return  {
          senderId: item.senderId,
          message: item.message
        }
      }).concat(body.messages[0])
      return await Chart.findOneAndUpdate(
        {_id: body.id},
        {$set: {messages: update}},
        {new: true}
      )
    }
  } catch (e) {
    console.log(e)
  }
}

