const { DataTypes } = require("sequelize");
const db = require('../database')

const userModel = db.define("user",{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
})

console.log("User Table is Ok")

module.exports = userModel