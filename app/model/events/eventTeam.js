'use strict';

//import database connection
let db = require('../database.js');

class EventTeamManager {

    constructor(){
        console.log("created EventTeam Manager");
    }

    CreateNewEventTeamEntry(idEvent,idTeam) {

        let object = {
            IDEvento : idEvent,
            IDSquadra : idTeam
        }

        return object;

    }

    /**
     * Retrieve all entries for events / teams
     * 
     * @param  { callback } result : query result
     */
    GetAllEventsTeams(result){

        let QUERY_GET_ALL_EVENTS_TEAMS = "SELECT * FROM Elenco_EventiSquadra;"

        db.query(QUERY_GET_ALL_EVENTS_TEAMS, (err,rows) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,rows);
            }

        });

    };

    /**
     *  Retrieve all teams interested in an Event
     * 
     * @param  { number } idEvent : Event ID
     * @param  { callback } result : query response
     */
    GetAllTeamsForAnEvent(idEvent,result) {

        let QUERY_GET_ALL_EVENTS_TEAMS = "SELECT * FROM Elenco_EventiSquadra WHERE IDEvento = ?;"

        db.query(QUERY_GET_ALL_EVENTS_TEAMS,idEvent, (err,rows) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,rows);
            }

        });

    }
    
    /**
     * Retrieve all events for a team
     * 
     * @param  { number } idTeam : Team ID
     * @param  { callback } result : query response
     */
    GetAllEventsForATeam(idTeam,result){

        let QUERY_GET_ALL_EVENTS_TEAMS = "SELECT * FROM Elenco_Eventi WHERE IDSquadra = ?;"

        db.query(QUERY_GET_ALL_EVENTS_TEAMS,idTeam, (err,rows) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,rows);
            }

        });

    };

    
    /**
     * Retrieve a single row combination between team / event
     * 
     * @param  { number } idEvent : Event ID
     * @param  { number } idTeam : Team ID
     * @param  { callback } result :  query response
     */
    GetASingleEventForASingleTeam(idEvent,idTeam,result) {

        let QUERY_GET_ALL_EVENTS_TEAMS = "SELECT * FROM Elenco_EventiSquadra WHERE IDSquadra = ? AND IDEvento = ?;"

        db.query(QUERY_GET_ALL_EVENTS_TEAMS,[idTeam,idEvent], (err,rows) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,rows);
            }

        });

    };

    /**
     * Insert a new row into the EventTeam Table
     * 
     * @param  { object } new_eventTeam : EventTeam Object
     * @param  { callback } result : query result
     */
    InsertNewEventTeamRecord(new_eventTeam, result) {

        let QUERY_INSERT_NEW_EVENT_TEAM = "INSERT INTO EventoSquadra SET ?";

        db.query( QUERY_INSERT_NEW_EVENT_TEAM, new_eventTeam, (err,response) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,response);
            }

        });

    }

    DeleteEventTeamEntry(idEvent,idTeam,result) {

        let QUERY_DELETE_ENTRY  = "DELETE FROM EventoSquadra WHERE IDSquadra = ? AND IDEvento = ?";

        db.query( QUERY_DELETE_ENTRY, [idTeam,idEvent], (err,response) => {

            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,response);
            }

        });

    };

    GetAllTeams(result){

        let QUERY_GET_ALL_TEAMS = "SELECT * FROM Squadra";

        db.query(QUERY_GET_ALL_TEAMS,(err,rows) => {

            if(err){
                console.log(err)
                result(err,null);
            }
            else{
                result(null,rows);
            }

        })

    }
    

    InsertEveryTeamIntoEvent(idEvent,result) {

        this.GetAllTeams((err,teams) => {

            if(err){
                result(err,null);
            }
            else{   

                let promiselist = [];

                teams.map((team,index) => {

                    this.GetASingleEventForASingleTeam(idEvent,team.IDSquadra,(err,rows) => {

                        if(err) {
                            result(err,null);
                        }
                        else{
                            console.log(rows);

                            if(rows.length > 0){
                                console.log("Already Inserted");
                            }
                            else {
    
                                var obj = this.CreateNewEventTeamEntry(idEvent,team.IDSquadra);
                                
                                promiselist.push(this.promiseInsertNewEventTeamRecord(obj));
                                
    
                            }

                        }

                    });

                });

                //Wait all Insert to resolve and checks result
                Promise.all(promiselist)
                    .then( resolution => {

                        result(null,resolution);

                    })
                    .catch( err => {

                        result(err,null);

                    })

            }

        })

    }

    promiseInsertNewEventTeamRecord(obj) {

        return new Promise((resolve,reject) => {
    
            this.InsertNewEventTeamRecord(obj,(err,response) => {
        
                if(err){
                    reject(err);
                }
                else{
                    resolve(response);
                }
    
            });
    
        })
    
    }

}



module.exports = EventTeamManager;