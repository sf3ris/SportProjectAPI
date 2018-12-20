'use strict';
var db = require('./database.js');

var TeamTrainer = function(teamTrainer) {
	this.IDSquadra = teamTrainer.IDSquadra;
	this.IDAllenatore = teamTrainer.IDAllenatore;
};

//Retrieve all Team's Trainers
TeamTrainer.getAllTeamsTrainers = (result) => {

    let GET_ALL_TEAMS_TRAINER = "SELECT * FROM Elenco_Squadra_Allenatori;";

    db.query(GET_ALL_TEAMS_TRAINER, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Retrieve a Team's Trainers 
TeamTrainer.getSingleTeamTrainers = (IDTeam, result) => {

    let GET_A_TEAM_TRAINERS = "SELECT * FROM Elenco_Squadra_Allenatori WHERE IDSquadra = ?;";

    db.query(GET_A_TEAM_TRAINERS, IDTeam, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Link an Trainer into a team
TeamTrainer.addTrainerToTeam = (newTeamTrainer, result) => {

    let ADD_TRAINER_TO_TEAM_QUERY = "INSERT INTO SquadraAllenatore SET ?";

    db.query(ADD_TRAINER_TO_TEAM_QUERY, newTeamTrainer, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }


    });

};

//Retrieve a Team's Trainer Details
TeamTrainer.getTeamTrainerInfo = (IDTeam, IDTrainer, result) => {

    let GET_TEAM_TRAINER_INFO_QUERY = "SELECT * FROM Elenco_Squadra_Allenatori WHERE IDSquadra = ? AND IDAllenatore = ?";

    db.query(GET_TEAM_TRAINER_INFO_QUERY, [IDTeam,IDTrainer], (err,rows) =>{

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Change an Trainer's Team
TeamTrainer.updateTeamTrainer = (IDTeam,IDTrainer, result) => {

    let UPDATE_TEAM_TRAINER_QUERY = "UPDATE SquadraAllenatore SET IDSquadra = ? WHERE IDAllenatore = ?";

    db.query(UPDATE_TEAM_TRAINER_QUERY, [IDTeam, IDTrainer], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Remove an Trainer from a Team
TeamTrainer.removeTrainerFromTeam = (IDTeam,IDTrainer, result) => {

    let DELETE_TRAINER_FROM_TEAM_QUERY = "DELETE FROM SquadraAllenatore WHERE IDSquadra = ? AND IDAllenatore = ? ";

    db.query(DELETE_TRAINER_FROM_TEAM_QUERY, [IDTeam, IDTrainer], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

module.exports = TeamTrainer;