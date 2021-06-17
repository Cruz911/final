const Sequelize = require('sequelize')
const db = require("../config/database");
const Notifications = require('./Notification');
const Message = require('./Message');
const Medication = require('./Medication');
const Job = require('./Job');
const HealthCentre = require('./HealthCentre');
const HealthWorker = require('./HealthWorker');
const Aid = require('./HealthCentre');
const Appointments = require('./Appointment');

const Patient = db.define('patient', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    healthcentre: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    },
    notifications: {
        type: Sequelize.STRING
    },
    messages: {
        type: Sequelize.STRING
    },
    allergies: {
        type: Sequelize.STRING
    },
    viral_load: {
        type: Sequelize.STRING
    },
    medications: {
        type: Sequelize.STRING
    },
    appointments: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING
    },
    aid: {
        type: Sequelize.STRING
    },
    job: {
        type: Sequelize.STRING
    },
});

Patient.hasMany(Message)
Patient.hasMany(Notifications)
Patient.hasMany(Medication)
Patient.hasMany(Job)
Patient.hasMany(Aid)
Patient.hasOne(HealthCentre)
Patient.hasMany(HealthWorker)
Patient.hasMany(Appointments)

module.exports = Patient