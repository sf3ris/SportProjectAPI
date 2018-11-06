'use strict';
var db = require('./database.js');

var Reminder = function(reminder) {
	this.Messaggio = reminder.Messaggio;
	this.IDAppuntamento = reminder.IDAppuntamento;
	this.IDUtente = reminder.IDUtente
}

Reminder.getAllRemindersAppointment = (IDAppointment, result) => {

	db.query("SELECT * From Elenco_Promemoria WHERE IDAppuntamento = ?", IDAppointment, (err,res) => {
		if(err){
			res.send(err)
			console.log(err,null)
		}
		else {
			console.log(res)
			result(null,res)
		}
	})
}

Reminder.CreateAReminder = (new_reminder, result ) => {

	db.query("INSERT INTO Promemoria SET ?",new_reminder, (err,res) => {
		if (err){
			console.log("error",err);
			result(err,null);
		}
		console.log("Inserted Reminder ID : " + res.insertId);
		result(null,res.insertId);
	})

}


module.exports = Reminder