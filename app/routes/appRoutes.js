'use strict';
module.exports = (app) => {
	var athletes = require('../controller/athletesController');
	var associates = require('../controller/associateController');
	var trainers = require('../controller/trainersController');
	var reminders = require('../controller/reminderController.js');
	var memberships = require('../controller/membershipsController.js');
	var deadlines = require('../controller/deadlineController.js');


	//Athletes Routes
	app.route('/athletes')
		.get(athletes.get_all_athletes)
		.post(athletes.insert_new_athlete);

	app.route('/athletes/:IDAthlete')
		.get(athletes.get_an_athlete)
		.put(athletes.update_an_athlete)
		.delete(athletes.remove_an_athlete);

	//Athletes Certifies Routes
	app.route('/athletes/all/certificates')
		.get(athletes.get_all_athletes)

	//Certifies for a single athlete
	app.route('/athletes/:IDAthlete/certificates')
		.get(athletes.get_all_certificates)
		.post(athletes.register_new_certificate)

	//Appointments for a single athlete	
	app.route('/athletes/:IDAthlete/appointments')
		.get(athletes.get_all_appointments)
		.post(athletes.register_new_appointment)

	//Athletes'appointment Routes
	app.route('/athletes/:IDAthlete/appointments/:IDAppointment')
		.get(athletes.get_an_appointment)
		.put(athletes.update_an_appointment)
		.delete(athletes.remove_an_appointment)

	//Athletes'appointment's reminder Routes
	app.route('/athletes/:IDAthlete/appointments/:IDAppointment/reminders')
		.get(reminders.get_all_reminders_appointment)
		.post(reminders.create_a_reminder)

	//Athletes's memberships Routes
	app.route('/athletes/:IDAthlete/memberships')
		.get(athletes.get_all_memberships)
		.post(athletes.register_new_membership)
		
	//Athletes's single membership Routes
	app.route('/athletes/:IDAthlete/memberships/:IDMembership')
		.get(athletes.get_a_membership)
		.put(athletes.update_a_membership)
		.delete(athletes.delete_a_membership)

	//Associates Routes	
	app.route('/associates')
		.get(associates.get_all_associates)
		.post(associates.insert_new_associate);

	app.route('/associates/:IDAssociate')
		.get(associates.get_an_associate)
		.put(associates.update_an_associate)
		.delete(associates.remove_an_associate)

	//Trainers Routes
	app.route('/trainers')
		.get(trainers.get_all_trainers)
		.post(trainers.insert_new_trainer) // need to add level as query on url to work properly

	app.route('/trainers/:IDTrainer')
		.get(trainers.get_a_trainer)
		.put(trainers.update_a_trainer)
		.delete(trainers.remove_a_trainer)

	//Memberships Routes
	app.route('/memberships')
		.get(memberships.get_all_memberships);

	//Deadlines Routes
	app.route('/deadlines')
		.get(deadlines.get_all_deadlines);

	//Athlete's Membership's deadlines Routes
	app.route('/athletes/:IDAthlete/memberships/:IDMembership/deadlines')
		.get(memberships.get_all_deadlines)
		.post(memberships.insert_new_deadline)

	app.route('/athletes/:IDAthlete/memberships/:IDMembership/deadlines/:IDDeadline')
		.get(deadlines.get_a_deadline)
		.put(deadlines.update_a_deadline)
		.delete(deadlines.delete_a_deadline);
};