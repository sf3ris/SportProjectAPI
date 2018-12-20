'use strict';
var db = require('./database.js');

var TeamAssociate = function(teamAssociate) {
	this.IDSquadra = teamAssociate.IDSquadra;
	this.IDSocio = teamAssociate.IDSocio;
};

//Retrieve all Team's Associates
TeamAssociate.getAllTeamsAssociates = (result) => {

    let GET_ALL_TEAMS_ASSOCIATE = "SELECT * FROM Elenco_Squadra_Soci;";

    db.query(GET_ALL_TEAMS_ASSOCIATE, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Retrieve a Team's Associates 
TeamAssociate.getSingleTeamAssociates = (IDTeam, result) => {

    let GET_A_TEAM_ASSOCIATES = "SELECT * FROM Elenco_Squadra_Soci WHERE IDSquadra = ?;";

    db.query(GET_A_TEAM_ASSOCIATES, IDTeam, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Link an Associate into a team
TeamAssociate.addAssociateToTeam = (newTeamAssociate, result) => {

    let ADD_ASSOCIATE_TO_TEAM_QUERY = "INSERT INTO SquadraSocio SET ?";

    db.query(ADD_ASSOCIATE_TO_TEAM_QUERY, newTeamAssociate, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }


    });

};

//Retrieve a Team's Associate Details
TeamAssociate.getTeamAssociateInfo = (IDTeam, IDAssociate, result) => {

    let GET_TEAM_ASSOCIATE_INFO_QUERY = "SELECT * FROM Elenco_Squadra_Soci WHERE IDSquadra = ? AND IDSocio = ?";

    db.query(GET_TEAM_ASSOCIATE_INFO_QUERY, [IDTeam,IDAssociate], (err,rows) =>{

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Change an Associate's Team
TeamAssociate.updateTeamAssociate = (IDTeam,IDAssociate, result) => {

    let UPDATE_TEAM_ASSOCIATE_QUERY = "UPDATE SquadraSocio SET IDSquadra = ? WHERE IDSocio = ?";

    db.query(UPDATE_TEAM_ASSOCIATE_QUERY, [IDTeam, IDAssociate], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

//Remove an Associate from a Team
TeamAssociate.removeAssociateFromTeam = (IDTeam,IDAssociate, result) => {

    let DELETE_ASSOCIATE_FROM_TEAM_QUERY = "DELETE FROM SquadraSocio WHERE IDSquadra = ? AND IDSocio = ? ";

    db.query(DELETE_ASSOCIATE_FROM_TEAM_QUERY, [IDTeam, IDAssociate], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

module.exports = TeamAssociate;