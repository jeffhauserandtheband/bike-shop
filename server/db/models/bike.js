const Sequelize = require('sequelize')
const db = require('../db')


//-----------------------------------------------------------
//BIKES
//-----------------------------------------------------------
const Bike = db.define('bike', {
  name: {
    type: Sequelize.STRING, //model or title
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'bike name must not be empty'
      }
    }
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'must have a description for the bike'
      }
    }
  },

  price: {
    type: Sequelize.DECIMAL(10,2), //USD only for now
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'must have a price, 0.00 is ok'
      }
    }
  },

  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'inventory count needed, 0 is ok'
      }
    }
  },

  availability: {
    type: Sequelize.ENUM('available','discontinued')
  }

})


//-------------------------------------------------------------
//BIKE IMAGES
//-------------------------------------------------------------
const BikeImage = db.define('bikeimage', {
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg'
  }
})

//--------------------------------------------------------------
//CATEGORY KEY -- I.E., 'BRAND', 'USE' -- headers for filter criteria
//--------------------------------------------------------------
const CategoryKey = db.define('categorykey', {
  name: Sequelize.STRING
  })

//---------------------------------------------------------------
//CATEGORY VALUES -- I.E., schwinn, trek, offroad, street -- all the subs
//--------------------------------------------------------------
const CategoryValue = db.define('categoryvalue', {
  name: Sequelize.STRING
  })

module.exports = {Bike,BikeImage,CategoryKey,CategoryValue}

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
