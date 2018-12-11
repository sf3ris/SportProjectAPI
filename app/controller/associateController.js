'use strict';

//Import Associates Model
var Associate = require('../model/associateModel.js');
const mysql = require('mysql');

// Exports Associates list
exports.get_all_associates = (req,res) => {
	Associate.getAllAssociates((error,response) => {
		console.log("controller");
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	});
}

// Insert Associate Controller
exports.insert_new_associate = (req,res) => {
	var new_associate = new Associate(req.body.associate);

	//handles null error
	if(!new_associate.Nome || !new_associate.Cognome){
		res.status(400).send({
			error: true,
			message: "Please Provide at least Name and LastName"
		})
	}

	Associate.createNewAssociate(new_associate, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

// Single Associate controller
exports.get_an_associate = (req,res) => {

	var IDAssociate = mysql.escape(parseInt(req.params.IDAssociate))

	if(!parseInt(IDAssociate)){
		res.status(400).send({
			error: true,
			message: "Please Provide a valid ID"
		})
	}

	Associate.getAnAssociate(IDAssociate, (error,response) => {
		if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
	})
}

// Update a single Associate controller
exports.update_an_associate = (req,res) => {

	var IDAssociate = parseInt(req.params.IDAssociate);
	var paramArray = new Array;
	for (const prop in req.body){
		console.log(prop);
		console.log(req.body[prop])
	}

	Associate.updateAnAssociate(IDAssociate ,req.body, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}

// Remove an Associate controller
exports.remove_an_associate = (req,res) => {
	
	var IDAssociate = mysql.escape(parseInt(req.params.IDAssociate));

	Associate.removeAnAssociate(IDAssociate, (err,response) => {
		if(err)
			res.send(err)
		res.json({
			message: "Associate Removed"
		});
	})

}