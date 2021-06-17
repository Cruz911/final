const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Medication = db.define('medication', {
    patient_id: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    health_worker: {
        type: Sequelize.STRING
    },
});

Medication.belongsTo(Patient)

module.exports = Medication