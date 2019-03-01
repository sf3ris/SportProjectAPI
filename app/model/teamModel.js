'use strict';
var db = require('./database.js');

var Team = function(team) {

	this.Descrizione = team.Descrizione;
	this.DescrizioneBreve = team.DescrizioneBreve;
}

/*
* Retrieve All Teams
*/
Team.getAllTeams = (result) => {

    let GET_ALL_TEAMS_QUERY = "SELECT * FROM Elenco_Squadre;"

    db.query(GET_ALL_TEAMS_QUERY, (err,rows) => {
        if(err){
            console.log(err);
            result(err,null);
        }
        result(null,rows);
    });
};

/*
* Retrieve a Team Details
*/
Team.getSingleTeam = (IDTeam,result) => {

    let GET_SINGLE_TEAM_QUERY = "SELECT * FROM Elenco_Squadre S WHERE S.IDSquadra = ?;";

    db.query(GET_SINGLE_TEAM_QUERY, IDTeam, (err,rows) => {
        if(err){
            console.log(err);
            result(err,null);
        }
        result(null,rows);
    });
};

/*
* Insert a new Team
*/
Team.addNewTeam = (newTeam,result) => {

    let INSERT_NEW_TEAM_QUERY = "INSERT INTO Squadra SET ?";

    db.query(INSERT_NEW_TEAM_QUERY, newTeam, (err,rows) => {
        if(err){
            console.log(err);
            result(err,null);
        }
        result(null,rows);
    })

}

/*
* Delete a Team
*/
Team.deleteATeam = (IDTeam,result) => {

    let DELETE_TEAM_QUERY = "DELETE FROM Squadra WHERE IDSquadra = ?";

    db.query(DELETE_TEAM_QUERY, IDTeam, (err,rows) => {
        if(err){
            console.log(err);
            result(err,null);
        }
        result(null,rows);
    });

};

/*
* Update a Team 
*/
Team.updateATeam = (IDTeam, newTeam, result) => {

    let UPDATE_TEAM_QUERY = "UPDATE Squadra SET ? WHERE IDSquadra = ?";

    db.query(UPDATE_TEAM_QUERY, [newTeam,IDTeam], (err,rows) => {
        if(err){
            console.log(err);
            result(err,null);
        }
        result(null,rows);
    });
};

module.exports = Team;