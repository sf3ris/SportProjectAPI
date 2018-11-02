'use strict';
var db = require('./database.js');

var Appointment = function(appointment) {
	this.Luogo = appointment.Luogo;
	this.Data = appointment.Data;
	this.IDAtleta = appointment.IDAtleta;
	this.Costo = appointment.Costo;
}

Appointment.registerNewAppointment = (newAppointment, result) =>{

	var formattedArray = new Array;
	for (const prop in newAppointment){
		if(typeof(newAppointment[prop]) === 'undefined'){
			formattedArray.push = null;
		}
		else{
			formattedArray.push(newAppointment[prop]);
		}
	}
	console.log(formattedArray);

	db.query("CALL CeAt_RegistraAppuntamento( ? )", [formattedArray], (err,res) =>{
		if (err){
			console.log("error",err);
			result(err,null);
		}
		console.log("Inserted Appointment ID : " + res.insertId);
		result(null,res.insertId);
	})
}



module.exports = Appointment;