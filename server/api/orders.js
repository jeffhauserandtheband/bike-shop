const router = require('express').Router()
const {Order, OrderEntries, Bike} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId
      },
      include:[{all: true}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})


