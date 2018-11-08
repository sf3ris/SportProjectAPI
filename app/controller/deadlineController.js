'use strict';

//Import Deadline Model
var Deadline = require('../model/deadlineModel.js');
//Import checking scripts
var inputChecker = require('../utility/inputChecker.js');

const mysql = require('mysql');

exports.get_all_deadlines = (req,res) => {

    Deadline.getAllDeadlines((err,response) => {
        if(err) res.send(err);
        res.json(response);
    });
};

exports.get_a_deadline = (req,res) => {

    var IDDeadline = mysql.escape(parseInt(req.params.IDDeadline));
    var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
    var IDMembership = mysql.escape(parseInt(req.params.IDMembership));

    inputChecker.parse_int_input(res,IDDeadline,"Deadline");
    inputChecker.parse_int_input(res,IDAthlete,"Athlete");
    inputChecker.parse_int_input(res,IDMembership,"Membership");

    Deadline.getADeadline(IDDeadline,(err,response) => {
        if(err) res.send(err);
        res.json(response);
    });
};


exports.update_a_deadline = (req,res) => {

    var IDDeadline = mysql.escape(parseInt(req.params.IDDeadline));
    var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
    var IDMembership = mysql.escape(parseInt(req.params.IDMembership));

    inputChecker.parse_int_input(res,IDDeadline,"Deadline");
    inputChecker.parse_int_input(res,IDAthlete,"Athlete");
    inputChecker.parse_int_input(res,IDMembership,"Membership");

    Deadline.updateADeadline(IDDeadline,req.body,(err,response) => {
        if(err) res.send(err);
        res.json(response);
    });
};

exports.delete_a_deadline = (req,res) => {

    var IDDeadline = mysql.escape(parseInt(req.params.IDDeadline));
    var IDAthlete = mysql.escape(parseInt(req.params.IDAthlete));
    var IDMembership = mysql.escape(parseInt(req.params.IDMembership));

    inputChecker.parse_int_input(res,IDDeadline,"Deadline");
    inputChecker.parse_int_input(res,IDAthlete,"Athlete");
    inputChecker.parse_int_input(res,IDMembership,"Membership");

    Deadline.deleteADeadline(IDDeadline,(err,response) => {
        if(err) res.send(err);
        res.json(response);
    });
};