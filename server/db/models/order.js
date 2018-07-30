const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  state: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed')
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
  //NOTE - BIKE PRICES ARE DECIMAL(10,2) SO MAKE
  //SURE TO CONVERT AS APPROPRIATE
  orderCost: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
