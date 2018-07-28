const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  state: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed')
  },
  date: {
    type: Sequelize.DATE
  },
  shippingEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shippingName: {
    type: Sequelize.STRING
  },
  shippingAddress: {
    type: Sequelize.TEXT
  },
  shippingCity: {
    type: Sequelize.TEXT
  },
  shippingState: {
    type: Sequelize.STRING
  },
  shippingZip: {
    type: Sequelize.STRING
  },
  orderCost: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
