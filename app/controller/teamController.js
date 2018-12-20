'use strict'

//Model Imports
var Team = require('../model/teamModel.js');

//node_modules Imports
const mysql = require('mysql');

//Import checking scripts
var inputChecker = require('../utility/inputChecker.js');

//All Teams
exports.get_all_teams = (req,res) => {

    Team.getAllTeams((err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Single Team 
exports.get_a_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    //Check for valid integer ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    Team.getSingleTeam(IDTeam, (err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        })

    });

};

//Add New Team
exports.add_new_team = (req,res) => {

    let newTeam = new Team(req.body);

    if(Team.Descrizione === ''){
        res.status(400).send({
            error:true,
            message: "Please provide a valid description String"
        });
    }

    Team.addNewTeam(newTeam,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data:rows
        });

    });

};

//Delete a Team
exports.delete_a_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    //Check for valid integer ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    Team.deleteATeam(IDTeam, (err,rows) => {

        if(err) res.send(err);
        res.json({
            data:rows
        });

    });

};

//Update a Team
exports.update_a_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    //Check for valid integer ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    Team.updateATeam(IDTeam, req.body, (err,rows) => {
        
        if(err) res.send(err);
        res.json({
            data:rows
        });

    });

};
