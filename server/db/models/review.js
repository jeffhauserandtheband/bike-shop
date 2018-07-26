const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    date: Sequelize.DATE,
    rating: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    comments: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }

})

module.exports = {Review}