const Sequelize = require('sequelize')
const db = require("../config/database");
const Patient = require('./Patient');

const Notifications = db.define('notifications', {
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

Notifications.belongsTo(Patient)

module.exports = Notifications;