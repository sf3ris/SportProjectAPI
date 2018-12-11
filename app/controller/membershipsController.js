'use strict';

const mysql = require('mysql');

//Import Membership Model
var Membership = require('../model/membershipModel.js');
//Import Deadline Model
var Deadline = require('../model/deadlineModel.js');
//Import checking scripts
var inputChecker = require('../utility/inputChecker.js');

exports.get_all_memberships = (req,res) => {

	Membership.getAllMemberships((err,response) => {
		if(err) res.send(err);
		res.json(response);
	});
};

exports.get_all_deadlines = (req,res) => {

	//console.log("Controller OK");

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	var IDMembership = mysql.escape(parseInt(req.params.IDMembership));

	inputChecker.parse_int_input(res,IDAthlete,"Athlete");
	inputChecker.parse_int_input(res,IDMembership,"Membership");
	
	Deadline.getDeadlinesForMembership(IDAthlete, IDMembership, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	});
};

exports.insert_new_deadline = (req,res) => {

	var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
	var IDMembership = mysql.escape(parseInt(req.params.IDMembership));
	
	inputChecker.parse_int_input(res,IDAthlete,"Athlete");
	inputChecker.parse_int_input(res,IDMembership,"Membership");

	Deadline.insertNewDeadline(req.body, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	});
};

exports.get_a_membership = (req,res) => {
	var IDMembership = mysql.escape(parseInt(req.params.IDMembership));
	inputChecker.parse_int_input(res,IDMembership,"Membership");

	Membership.getMembership(IDMembership, (err,response) => {
		if(err) res.send(err);
		res.json(response);
	})
}


