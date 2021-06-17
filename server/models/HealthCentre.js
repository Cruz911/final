const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const HealthCentre = db.define('healthcentre', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    workers: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING
    }
});

HealthCentre.belongsTo(Patient)

module.exports = HealthCentre