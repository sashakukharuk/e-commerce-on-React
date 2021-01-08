const Order = require('../models/Order')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async (req, res) => {
  try {
    const lastOrder = await Order.findOne().sort({date: -1})
    const maxOrder = lastOrder ? lastOrder.order : 0
    const order = await new Order({
      order: maxOrder + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
      novaPosh: req.body.novaPosh,
      list: req.body.list
    }).save()
    res.status(200).json(order)
  } catch (e) {
    errorHandler(res, e)
  }
}
