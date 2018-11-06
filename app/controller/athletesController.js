'use strict';

//Import Athletes Model
var Athlete = require('../model/athletesModel.js');
var Certificate = require('../model/certifiesModel.js');
var Appointment = require('../model/appointmentsModel.js')
var Membership = require('../model/membershipModel.js');
const mysql = require('mysql');

// Exports Athletes list
exports.get_all_athletes = (req,res) => {
	Athlete.getAllAthletes((error,response) => {
		console.log("controller");
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	});
}

// Insert Athlete Controller
exports.insert_new_athlete = (req,res) => {
	var new_athlete = new Athlete(req.body);

	//handles null error
	if(!new_athlete.Nome || !new_athlete.Cognome){
		res.status(400).send({
			error: true,
			message: "Please Provide at least Name and LastNameNa"
		})
	}

	Athlete.createNewAthlete(new_athlete, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

// Single Athlete controller
exports.get_an_athlete = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete))

	if(!parseInt(IDAthlete)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Athlete.getAnAthlete(IDAthlete, (error,response) => {
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	})
}

// Update a single athlete controller
exports.update_an_athlete = (req,res) => {

	var IDAthlete = parseInt(req.params.IDAthlete);
	var paramArray = new Array;
	for (const prop in req.body){
		console.log(prop);
		console.log(req.body[prop])
	}

	Athlete.updateAnAthlete(IDAthlete ,req.body, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

// Remove an athlete controller
exports.remove_an_athlete = (req,res) => {
	
	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));

	if(!parseInt(IDAthlete)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Athlete.removeAnAthlete(IDAthlete, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			message: "Athlete Removed"
		});
	})

}

exports.get_all_certificates = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));

	if(!parseInt(IDAthlete)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Athlete.getAllCertificates(IDAthlete, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			response
		});
	})
}

exports.register_new_certificate = (req,res) => {
	var new_certificate = new Certificate(req.body);

	if(!new_certificate.IDAtleta){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Athlete ID"
		})
	}

	Certificate.registerNewCertificate(new_certificate, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			data:response
		});
	})

}

exports.get_all_appointments = (req,res) => {
	
	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));

	if(!parseInt(IDAthlete)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Athlete.getAllAppointments(IDAthlete, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			data:response
		});
	})	
}

exports.register_new_appointment = (req,res) => {

	var new_appointment = new Appointment(req.body);

	if(!new_appointment.IDAtleta || !new_appointment.Luogo || !new_appointment.Data){
		res.status(400).send({
			error:true,
			message: "Please provide all needed fields..Retry.."
		})
	}

	Appointment.registerNewAppointment(new_appointment, (err, response) => {
		if(err)
			res.send(err)
		res.json({
			data:response
		});
	})
}

exports.get_an_appointment = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	var IDAppointment = mysql.escape(parseInt(req.params.IDAppointment));

	if(!parseInt(IDAthlete) || !parseInt(IDAppointment)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Athlete ID or Appointment ID"
		})
	}

	Appointment.getAnAppointment(IDAppointment,IDAthlete, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			data:response
		});
	})	

}

exports.update_an_appointment = (req,res) => {

	var new_appointment = req.body;
	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	var IDAppointment = mysql.escape(parseInt(req.params.IDAppointment));

	if(!parseInt(IDAthlete) || !parseInt(IDAppointment)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Athlete ID or Appointment ID"
		})
	}

	Appointment.updateAnAppointment(IDAppointment,IDAthlete,new_appointment,  (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}


exports.remove_an_appointment = (req,res) => {
	
	var IDAppointment = mysql.escape(parseInt(req.params.IDAppointment));

	if(!parseInt(IDAthlete) || !parseInt(IDAppointment)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Athlete ID or Appointment ID"
		})
	}

	Appointment.deleteAnAppointment(IDAppointment, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

exports.get_all_memberships = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	if(!parseInt(IDAthlete)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Athlete ID or Appointment ID"
		})
	}

	Membership.getAllMembershipsForAnAthlet(IDAthlete, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

exports.register_new_membership = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	var new_membership = new Membership(req.body);

	if(!parseInt(IDAthlete) || !new_membership.IDAnnoSportivo || !new_membership.Importo || !new_membership.DataInizio){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid body request"
		})
	}

	Membership.registerNewMembership(new_membership, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})

}