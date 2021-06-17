const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Message = db.define('message', {
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

Message.belongsTo(Patient)

module.exports = Message