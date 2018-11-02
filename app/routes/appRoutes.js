'use strict';
module.exports = (app) => {
	var athletes = require('../controller/athletesController');
	var associates = require('../controller/associateController');
	var trainers = require('../controller/trainersController');


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

}