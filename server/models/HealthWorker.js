const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const HealthWorker = db.define('healthworker', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    centre_id: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    admin: {
        type: Sequelize.BOOLEAN
    },
    password: {
        type: Sequelize.STRING
    }
});

HealthWorker.belonsTo(Patient)

module.exports = HealthWorker