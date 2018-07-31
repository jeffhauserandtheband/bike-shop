const router = require('express').Router()
const {Order, OrderEntries, Bike} = require('../db/models')
module.exports = router

//NOTE - ORDER POST IS DONE IN carts FILE

//user get orders
router.get('/:userId', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId
      },
      include: [{all: true}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

//Admin get orders  needs middleware
router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll({include: [{all: true}]})
    res.json(order)
  } catch (err) {
    next(err)
  }
})

//Admin change order status
router.put('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId)
    await order.update({
      state: req.body.status
    })
    const updatedOrder = await Order.findById(req.params.orderId,{include: [{all: true}]})
    res.json(updatedOrder)
  } catch (error) {
    console.error('Didnt update order', error)
    next(error)
  }
})
