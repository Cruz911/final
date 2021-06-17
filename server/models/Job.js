const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Job = db.define('job', {
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
    }
});

Job.BelongsTo(Patient)

module.exports = Job