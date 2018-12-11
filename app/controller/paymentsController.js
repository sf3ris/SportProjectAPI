'use strict';

const mysql = require('mysql');

//Import Membership Model
var Payment = require('../model/paymentModel.js');
//Import checking scripts
var inputChecker = require('../utility/inputChecker.js');

exports.get_all_payments = (req,res) => {

	Payment.getAllPayments((err,response) => {
		if(err) res.send(err);
		res.json(response);
	});
};