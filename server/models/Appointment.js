const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Appointment = db.define('appointment', {
    title: {
        type: Sequelize.STRING
    },
    patient_id: {
        type: Sequelize.STRING
    },
    date:{
        type: Sequelize.DATEONLY
    }
    ,
    time: {
        type: Sequelize.TIME
    }
    ,
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

Appointment.belongsTo(Patient)

module.exports = Appointment