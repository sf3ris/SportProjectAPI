'use strict';

//Import Athletes Model
var Reminder = require('../model/remindersModel.js');

const mysql = require('mysql');

exports.get_all_reminders_appointment = (req,res) => {

	var IDAppointment = mysql.escape(parseInt(req.params.IDAppointment))

	if(!parseInt(IDAppointment)){
		res.status(400).send({
			error:true,
			message: "Please provide a valid appointment"
		})
	}

	Reminder.getAllRemindersAppointment(IDAppointment, (err,response) => {
		if(err){
			res.send(err)
			console.log('err',response)
		}
		else{
			res.json({
				data: response
			})
		}
	})

}

exports.create_a_reminder = (req,res) => {

	var new_reminder = new Reminder(req.body);
	
	if(!new_reminder.Messaggio || new_reminder.IDAppointment){
		res.status(400).send({
			error: true,
			message : "Please provide a valid message or valid Appointment ID"
		})
	}

	Reminder.CreateAReminder(new_reminder, (err,response) => {
		if(err) res.send(err)
		res.json({
			insertedID: response
		});
	})
}
