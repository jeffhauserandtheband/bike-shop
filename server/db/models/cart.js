const Sequelize = require('sequelize')
const db = require('../db')


//-----------------------------------------------------------
//CART
//-----------------------------------------------------------
const Cart = db.define('cart', {
  sessionCookie: Sequelize.TEXT //placeholder until we decide what to do with auth checking
})

//------------------------------------------------------------
//CARTENTRY
//------------------------------------------------------------
const CartEntry = db.define('cartentry', {
  quantity: Sequelize.INTEGER 
})

module.exports = { Cart, CartEntry }

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
