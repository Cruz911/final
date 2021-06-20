const express = require("express")
const bodyParser = require("body-parser")
const Sequelize  = require('sequelize');
const morgan = require('morgan')


var Model = Sequelize.Model;
var sequelize = new Sequelize("patients","postgres","root",{
    host : "localhost",
    dialect : "postgres"
})
sequelize.authenticate().then(function(resStt){
console.log("Connection established")
})
.catch(function(err){
    console.log('The error is ',err);
})
const app = express();

const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// const db = require('./config/database')
const gigs = require('./routes/gigs')
const aid = require('./routes/aid')
const appointment = require('./routes/appointment')
const healthcentre = require('./routes/healthcentre')
const healthworker = require('./routes/healthworker')
const job = require('./routes/job')
const medication = require('./routes/medication')
const message = require('./routes/message')
const notification = require('./routes/notifications')
const patient = require('./routes/patient')



// db.authenticate()
//   .then(()=> console.log("DB connected"))
//   .catch(err => console.log("Error:" + err))

app.use(morgan('dev'))

app.use("/gigs", gigs);
app.use("/aid", aid);
app.use("/appointments", appointment);
app.use("/healthcentres", healthcentre);
app.use("/healthworkers", healthworker);
app.use("/medication", medication);
app.use("/message", message);
app.use("/notifications", notification);
app.use("/patients", patient);
app.use("/jobs", job);


app.get('/', (req, res)=>{
    res.send("wapinda")
});


var PatientModel = require('./models/Patient');
var NotificationsModel = require('./models/Notification');
var AidModel = require('./models/Aid');
var AppointmentsModel = require('./models/Appointment');
var CentreModel = require('./models/HealthCentre');
var WorkersModel = require('./models/HealthWorker');
var JobModel = require('./models/Job');
var MedicationModel = require('./models/Medication');
var MessageModel = require('./models/Message');
var ViralLoadModel = require('./models/ViralLoad');
var AllergiesModel = require('./models/Allergies');

var Patient = PatientModel(Sequelize,sequelize,Model);
var Notifications = NotificationsModel(Sequelize,sequelize,Model);
var Aid = AidModel(Sequelize,sequelize,Model);
var Centre = CentreModel(Sequelize,sequelize,Model);
var Workers = WorkersModel(Sequelize,sequelize,Model);
var Appointments = AppointmentsModel(Sequelize,sequelize,Model);
var Job = JobModel(Sequelize,sequelize,Model);
var Medication = MedicationModel(Sequelize,sequelize,Model);
var Message = MessageModel(Sequelize,sequelize,Model);
var ViralLoad = ViralLoadModel(Sequelize,sequelize,Model);
var Allergies = AllergiesModel(Sequelize,sequelize,Model);

//relation start
Patient.hasMany(Notifications);
Notifications.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasOne(Aid);
Aid.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasOne(Centre);
Centre.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Workers);
Workers.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Appointments);
Appointments.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Job);
Job.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Medication);
Medication.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Message);
Message.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(ViralLoad);
ViralLoad.belongsTo(Patient,{foreignKey : "patient_id"});

Patient.hasMany(Allergies);
Allergies.belongsTo(Patient,{foreignKey : "patient_id"});
//relation ends


// sequelize.sync({force : true})
// .then(()=>{
//   console.log("all tables created !")
// })
// .catch(function(err){
//     console.log('The error is ',err);
// })

app.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`)
});

