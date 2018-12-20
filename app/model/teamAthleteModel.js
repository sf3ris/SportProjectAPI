'use strict';
var db = require('./database.js');

var TeamAthlete = function(teamAthlete) {
	this.IDSquadra = teamAthlete.IDSquadra;
	this.IDAtleta = teamAthlete.IDAtleta;
};

//Retrieve all Team's Athletes
TeamAthlete.getAllTeamsAthletes = (result) => {

    let GET_ALL_TEAMS_ATHLETE = "SELECT * FROM Elenco_Squadra_Atleti;";

    db.query(GET_ALL_TEAMS_ATHLETE, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Retrieve a Team's Athletes 
TeamAthlete.getSingleTeamAthletes = (IDTeam, result) => {

    let GET_A_TEAM_ATHLETES = "SELECT * FROM Elenco_Squadra_Atleti WHERE IDSquadra = ?;";

    db.query(GET_A_TEAM_ATHLETES, IDTeam, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Link an Athlete into a team
TeamAthlete.addAthleteToTeam = (newTeamAthlete, result) => {

    let ADD_ATHLETE_TO_TEAM_QUERY = "INSERT INTO SquadraAtleta SET ?";

    db.query(ADD_ATHLETE_TO_TEAM_QUERY, newTeamAthlete, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }


    });

};

//Retrieve a Team's Athlete Details
TeamAthlete.getTeamAthleteInfo = (IDTeam, IDAthlete, result) => {

    let GET_TEAM_ATHLETE_INFO_QUERY = "SELECT * FROM Elenco_Squadra_Atleti WHERE IDSquadra = ? AND IDAtleta = ?";

    db.query(GET_TEAM_ATHLETE_INFO_QUERY, [IDTeam,IDAthlete], (err,rows) =>{

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Change an Athlete's Team
TeamAthlete.updateTeamAthlete = (IDTeam,IDAthlete, result) => {

    let UPDATE_TEAM_ATHLETE_QUERY = "UPDATE SquadraAtleta SET IDSquadra = ? WHERE IDAtleta = ?";

    db.query(UPDATE_TEAM_ATHLETE_QUERY, [IDTeam, IDAthlete], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Remove an Athlete from a Team
TeamAthlete.removeAthleteFromTeam = (IDTeam,IDAthlete, result) => {

    let DELETE_ATHLETE_FROM_TEAM_QUERY = "DELETE FROM SquadraAtleta WHERE IDSquadra = ? AND IDAtleta = ? ";

    db.query(DELETE_ATHLETE_FROM_TEAM_QUERY, [IDTeam, IDAthlete], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

module.exports = TeamAthlete;