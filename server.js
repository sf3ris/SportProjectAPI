const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const mysql = require('mysql');

const mc = require('./database.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
var routes = require('./app/routes/appRoutes.js');
var trainerRoutes = require('./app/routes/trainersRoutes.js');
var teamsRoutes = require('./app/routes/teamsRoutes.js'); 
var eventRoutes = require('./app/routes/eventRoutes.js');

routes(app); //register the route
trainerRoutes(app); //Trainer Routes
teamsRoutes(app); //Teams Routes
eventRoutes(app); //Event Routes

app.listen(port, () => {
	console.log('Sport Project server listing on port ' + port)
});
