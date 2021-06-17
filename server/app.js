const express = require("express")
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const path = require("path")

const app = express();

const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const db = require('./config/database')
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

db.authenticate()
  .then(()=> console.log("DB connected"))
  .catch(err => console.log("Error:" + err))

app.use("/gigs", gigs);
app.use("/aid", aid);
app.use("/appointments", appointment);
app.use("/healthcentres", healthcentre);
app.use("/healthworkers", healthworker);
app.use("/medication", medication);
app.use("/message", message);
app.use("/notifications", notification);
app.use("/patients", patient);


app.get('/', (req, res)=>{
    res.send("wapinda")
});

app.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`)
});

