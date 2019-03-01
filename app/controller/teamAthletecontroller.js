'use strict'

//Models Import
var TeamAthlete = require('../model/teamAthleteModel.js');

//node_modules Imports
const mysql = require('mysql');

//local Imports
var inputChecker = require('../utility/inputChecker.js');

//Shows all Team's Athletes
exports.get_all_teams_athletes = (req,res) => {

    TeamAthlete.getAllTeamsAthletes((err,rows) => {
    
        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a Team's Athletes
exports.get_a_team_athletes = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));

    //Validate Team ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    TeamAthlete.getSingleTeamAthletes(IDTeam,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Link an Athlete into a Team
exports.link_athletes_into_team = (req,res) => {

    //let IDTeam = req.params.IDTeam;

    console.log(req.body);

    /* await inputChecker.parse_int_input(res,IDTeam, "Team ID");
    await inputChecker.parse_int_input(res,req.body.IDTeam, "Team ID");
    await inputChecker.parse_int_input(res,req.body.IDAthlete, "Athlete ID") */;

    let newTeamAthlete = new TeamAthlete(req.body);
    console.log(newTeamAthlete);

    TeamAthlete.addAthleteToTeam(newTeamAthlete,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a team's athlete info
exports.get_a_team_athlete_info = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDAthlete = mysql.escape(parseInt(req.params.idathlete));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDAthlete, "Athlete ID");

    TeamAthlete.getTeamAthleteInfo(IDTeam,IDAthlete,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Changes an athletes team
exports.change_athlete_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDAthlete = mysql.escape(parseInt(req.params.idathlete));

    console.log(req.params);

    //validate requests
    //inputChecker.parse_int_input(res,IDTeam, "Team ID");
    //inputChecker.parse_int_input(res,IDAthlete, "Athlete ID");

    TeamAthlete.updateTeamAthlete(IDTeam,IDAthlete, (err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });
        
    });

};

//Remove an athlete from a team
exports.remove_athlete_from_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDAthlete = mysql.escape(parseInt(req.params.idathlete));

    //validate requests
    //inputChecker.parse_int_input(res,IDTeam, "Team ID");
    //inputChecker.parse_int_input(res,IDAthlete, "Athlete ID");

    TeamAthlete.removeAthleteFromTeam(IDTeam,IDAthlete,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};