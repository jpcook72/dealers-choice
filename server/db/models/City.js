const Sequelize = require("sequelize") //for things like Sequelize.STRING
const db = require('../db.js');

const City = db.define('cities', {
    name: Sequelize.STRING,
    capital: Sequelize.BOOLEAN
})

module.exports = City