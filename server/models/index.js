
const Sequelize = require("sequelize");
var patient = require('./Patient')

const sequelize = new Sequelize('codegigs', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }})

module.exports = {
  Patient: patient(sequelize, Sequelize.DataTypes),
}

//   const db = {};

//   db.Sequelize = Sequelize;
//   db.sequelize = sequelize;




// module.exports = db;