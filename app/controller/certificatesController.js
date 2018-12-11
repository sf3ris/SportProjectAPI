'use strict';

const mysql = require('mysql');

//Import Membership Model
var Certificate = require('../model/certifiesModel.js');
//Import checking scripts
var inputChecker = require('../utility/inputChecker.js');

exports.get_all_certificates = (req,res) => {

	Certificate.getAllCertificates((err,response) => {
		if(err) res.send(err);
		res.json(response);
	});
};