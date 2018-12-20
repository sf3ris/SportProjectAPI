'use strict'

//Models Import
var TeamAssociate = require('../model/teamAssociateModel.js');

//node_modules Imports
const mysql = require('mysql');

//local Imports
var inputChecker = require('../utility/inputChecker.js');

//Shows all Team's Associates
exports.get_all_teams_associates = (req,res) => {

    TeamAssociate.getAllTeamsAssociates((err,rows) => {
    
        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a Team's Associates
exports.get_a_team_associates = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));

    //Validate Team ID
    inputChecker.parse_int_input(res,IDTeam,"Team ID");

    TeamAssociate.getSingleTeamAssociates(IDTeam,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Link an Associate into a Team
exports.link_associates_into_team = (req,res) => {

    let IDTeam = req.params.IDTeam;

    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,req.body.IDTeam, "Team ID");
    inputChecker.parse_int_input(res,req.body.IDAssociate, "Associate ID");

    let newTeamAssociate = new TeamAssociate(req.body);

    TeamAssociate.addAssociateToTeam(newTeamAssociate,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Shows a team's associate info
exports.get_a_team_associate_info = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.idteam));
    let IDAssociate = mysql.escape(parseInt(req.params.idassociate));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDAssociate, "Associate ID");

    TeamAssociate.getTeamAssociateInfo(IDTeam,IDAssociate,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};

//Changes an associates team
exports.change_associate_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.IDTeam));
    let IDAssociate = msyql.escape(parseInt(req.params.IDAssociate));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDAssociate, "Associate ID");

    TeamAssociate.updateTeamAssociate(IDTeam,IDAssociate, (err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });
        
    });

};

//Remove an associate from a team
exports.remove_associate_from_team = (req,res) => {

    let IDTeam = mysql.escape(parseInt(req.params.IDTeam));
    let IDAssociate = msyql.escape(parseInt(req.params.IDAssociate));

    //validate requests
    inputChecker.parse_int_input(res,IDTeam, "Team ID");
    inputChecker.parse_int_input(res,IDAssociate, "Associate ID");

    TeamAssociate.removeAssociateFromTeam(IDTeam,IDAssociate,(err,rows) => {

        if(err) res.send(err);
        res.json({
            data: rows,
            length: rows.length
        });

    });

};