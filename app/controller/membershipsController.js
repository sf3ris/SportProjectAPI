'use strict';

//Import Athletes Model
var Membership = require('../model/membershipModel.js');
const mysql = require('mysql');

exports.get_all_memberships = (req,res) => {

	Membership.getAllMemberships((err,response) => {
		if(err) res.send(err);
		res.json(response);
	})

}