const Sequelize = require('sequelize')
const db = require('../db')

const OrderEntries = db.define('orderEntries', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderEntries
