const { DataTypes } = require("sequelize");
const db = require('../database')

const adminMode = db.define("admin",{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
})

console.log("Admin Table is Ok")

module.exports = adminMode