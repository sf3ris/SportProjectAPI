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

Appointment.getAnAppointment = (IDAppointment,IDAthlete, result) => {

	db.query("SELECT * FROM Elenco_Appuntamenti WHERE IDAppuntamento = ? AND IDAtleta = ?", [IDAppointment, IDAthlete], (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Appointment.getAllAppointments = (result) => {
	db.query("SELECT * FROM Elenco_Appuntamenti", (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	});
};

Appointment.updateAnAppointment = (IDAppointment,IDAthlete,newAppointment, result) => {

	db.query("UPDATE Appuntamento SET ? WHERE ? AND ?", [newAppointment, IDAppointment, IDAthlete], (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})

}

Appointment.deleteAnAppointment = (IDAppointment, result) => {
	db.query("CALL CeAt_RimuoviAppuntamento( ? )", IDAppointment, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
} 



module.exports = Appointment;