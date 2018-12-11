'use strict';

//Import Trainers Model
var Trainer = require('../model/trainersModel.js');
const mysql = require('mysql');

// Exports Trainers list
exports.get_all_trainers = (req,res) => {
	Trainer.getAllTrainers((error,response) => {
		console.log("controller");
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	});
}

// Insert Trainer Controller
exports.insert_new_trainer = (req,res) => {
	var new_trainer = new Trainer(req.body.trainer);
	var IDLivello = mysql.escape(parseInt(req.body.trainer.IDLivello));

	//handles null error
	if(!new_trainer.Nome || !new_trainer.Cognome){
		res.status(400).send({
			error: true,
			message: "Please Provide at least Name and LastName"
		})
	}

	if(!IDLivello || !parseInt(IDLivello)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid Trainer Level -- Need to be on url query"
		})
	}

	//ADD LEVEL CHECK

	Trainer.createNewTrainer(new_trainer,IDLivello, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

exports.get_a_trainer = (req,res) => {

	var IDTrainer = mysql.escape(parseInt(req.params.IDTrainer))

	if(!parseInt(IDTrainer)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Trainer.getATrainer(IDTrainer, (error,response) => {
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	})
}

// Update a single Trainer controller
exports.update_a_trainer = (req,res) => {

	var IDTrainer = parseInt(req.params.IDTrainer);
	var paramArray = new Array;
	for (const prop in req.body){
		console.log(prop);
		console.log(req.body[prop])
	}

	Trainer.updateATrainer(IDTrainer ,req.body, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

// Remove an Trainer controller
exports.remove_a_trainer = (req,res) => {
	
	var IDTrainer = mysql.escape(parseInt(req.params.IDTrainer));

	Trainer.removeATrainer(IDTrainer, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			message: "Trainer Removed"
		});
	})

}