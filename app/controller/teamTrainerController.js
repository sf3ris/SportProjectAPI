'use strict'

//Models Import
var TeamTrainer = require('../model/teamTrainerModel.js');

//node_modules Imports
const mysql = require('mysql');

//local Imports
var inputChecker = require('../utility/inputChecker.js');

//Shows all Team's Trainers
exports.get_all_teams_trainers = (req,res) => {

    TeamTrainer.getAllTeamsTrainers((err,rows) => {
    
        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a Team's Trainers
exports.get_a_team_trainers = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));

    //Validate Team ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    TeamTrainer.getSingleTeamTrainers(IDTeam,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Link an Trainer into a Team
exports.link_trainers_into_team = (req,res) => {

    let IDTeam = req.params.IDTeam;

    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,req.body.IDTeam, "Team ID");
    inputChecker.parse_int_input(res,req.body.IDTrainer, "Trainer ID");

    let newTeamTrainer = new TeamTrainer(req.body);

    TeamTrainer.addTrainerToTeam(newTeamTrainer,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a team's trainer info
exports.get_a_team_trainer_info = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDTrainer = mysql.escape(parseInt(req.params.idtrainer));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDTrainer, "Trainer ID");

    TeamTrainer.getTeamTrainerInfo(IDTeam,IDTrainer,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Changes an trainers team
exports.change_trainer_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.IDTeam));
    let IDTrainer = msyql.escape(parseInt(req.params.IDTrainer));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDTrainer, "Trainer ID");

    TeamTrainer.updateTeamTrainer(IDTeam,IDTrainer, (err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });
        
    });

};

//Remove an trainer from a team
exports.remove_trainer_from_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDTrainer = mysql.escape(parseInt(req.params.idtrainer));

    console.log(req.params);

    //validate requests
    //inputChecker.parse_int_input(res,IDTeam, "Team ID");
    //inputChecker.parse_int_input(res,IDTrainer, "Trainer ID");

    TeamTrainer.removeTrainerFromTeam(IDTeam,IDTrainer,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};