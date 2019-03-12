'use strict';

//import database connection
let db = require('../database.js');

/** Class Object
 * @param  { input object } eventAthlete
 */
let EventAthlete = function(eventAthlete) {

    this.IDEvento = eventAthlete.IDEvento;
    this.IDAtleta = eventAthlete.IDAtleta;

};

/**
 * Retrieve all invited athletes for every event
 * 
 * @param  { callback } result : result's rows
 */
EventAthlete.GetAllEventsAthletes = (result) =>{

    let QUERY_GET_ALL_EVENTS_ATHLETES = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Atleta';";

    db.query(QUERY_GET_ALL_EVENTS_ATHLETES, (err,rows) => {

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
 * Retrieve all athlete's rows for an event
 * 
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : event's interested athletes rows
 */
EventAthlete.GetAllAthletesForAnEvent = (idEvent,result) => {

    let QUERY_GET_ALL_ATHLETES = "SELECT DISTINCT * FROM Elenco_EventiSquadraInteressati WHERE TipoInteresse = 'Atleta' AND IDEvento = ?;";

    db.query(QUERY_GET_ALL_ATHLETES,idEvent, (err,rows) => {

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
 * Retrieve all events for a given athlete
 * @param  { number } idAthlete : Athlete ID
 * @param  { callback } result : query result
 */
EventAthlete.GetAllEventsForAnAthlete = (idAthlete,result) => {

    let QUERY_GET_ALL_EVENTS = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Atleta' AND IDTipologiaInteressato = ?;";

    db.query( QUERY_GET_ALL_EVENTS, idAthlete, (err,rows) => {

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
 * Retrieve single row for a combination of athlete / event
 * 
 * @param  { number } idAthlete : Athlete ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventAthlete.GetSingleAthleteFromSingleEvent = (idAthlete,idEvent,result) => {

    let QUERY_GET_ATHLETE_EVENT = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Atleta' AND IDTipologiaInteressato = ? and IDEvento = ?;";

    db.query( QUERY_GET_ATHLETE_EVENT, [idAthlete,idEvent], (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

}

/*
 * Link an Athlete to An Event
 * 
 * @param  { Object } new_eventAthlete : EventAthlete Object
 * @param  { callback } result : query result
 */
EventAthlete.LinkAthleteToAnEvent = (new_eventAthlete,result) => {

    let QUERY_LINK_ATHLETE_EVENT = "INSERT INTO EventoInteresseAtleta SET ? ";

    db.query( QUERY_LINK_ATHLETE_EVENT, new_eventAthlete, (err,response) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,response);
        }

    });

};

/**
 * Remove an Athlete from an Event
 *  
 * @param  { number } idAthlete : Athlete ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventAthlete.UnlinkAthleteFromAnEvent = (idAthlete, idEvent, result) => {

    let QUERY_REMOVE_ATHLETE_FROM_EVENT = "DELETE FROM EventoInteresseAtleta WHERE IDAtleta = ? AND IDEvento = ?";

    db.query( QUERY_REMOVE_ATHLETE_FROM_EVENT, [idAthlete, idEvent], (err,response) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,response);
        }

    });

};



module.exports = EventAthlete;