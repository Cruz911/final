const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Aid = db.define('aid', {
   
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

Aid.belongsTo(Patient)

module.exports = Aid