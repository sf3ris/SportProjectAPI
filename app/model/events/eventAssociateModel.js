'use strict';

//import database connection
let db = require('../database.js');

/** Class Object
 * @param  { input object } eventAssociate
 */
let EventAssociate = function(eventAssociate) {

    this.IDEvento = eventAssociate.IDEvento;
    this.IDSocio = eventAssociate.IDSocio;

};

/**
 * Retrieve all invited associates for every event
 * 
 * @param  { callback } result : result's rows
 */
EventAssociate.GetAllEventsAssociates = (result) =>{

    let QUERY_GET_ALL_EVENTS_ATHLETES = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Staff';";

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
 * Retrieve single row for a combination of associate / event
 * 
 * @param  { number } idAssociate : Athlete ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventAssociate.GetSingleAssociateForSingleEvent = (idAssociate,idEvent,result) => {

    let QUERY_GET_ATHLETE_EVENT = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Staff' AND IDTipologiaInteressato = ? and IDEvento = ?;";

    db.query( QUERY_GET_ATHLETE_EVENT, [idAssociate,idEvent], (err,rows) => {

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
 * Retrieve all associate's rows for an event
 * 
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : event's interested associates rows
 */
EventAssociate.GetAllAssociatesForAnEvent = (idEvent,result) => {

    let QUERY_GET_ALL_ATHLETES = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Staff' AND IDEvento = ?;";

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
 * Retrieve all events for a given associate
 * @param  { number } idAssociate : Associate ID
 * @param  { callback } result : query result
 */
EventAssociate.GetAllEventsForAnAssociate = (idAssociate,result) => {

    let QUERY_GET_ALL_EVENTS = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Staff' AND IDTipologiaInteressato = ?;";

    db.query( QUERY_GET_ALL_EVENTS, idAssociate, (err,rows) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,rows);
        }

    });

};

/*
 * Link an Associate to An Event
 * 
 * @param  { Object } new_eventAssociate : EventAssociate Object
 * @param  { callback } result : query result
 */
EventAssociate.LinkAssociateToAnEvent = (new_eventAssociate,result) => {

    let QUERY_LINK_ATHLETE_EVENT = "INSERT INTO EventoInteresseSocio SET ? ";

    db.query( QUERY_LINK_ATHLETE_EVENT, new_eventAssociate, (err,response) => {

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
 * Remove an Associate from an Event
 *  
 * @param  { number } idAssociate : Associate ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventAssociate.UnlinkAssociateFromAnEvent = (idAssociate, idEvent, result) => {

    let QUERY_REMOVE_ATHLETE_FROM_EVENT = "DELETE FROM EventoInteresseSocio WHERE IDSocio = ? AND IDEvento = ?";

    db.query( QUERY_REMOVE_ATHLETE_FROM_EVENT, [idAssociate, idEvent], (err,response) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,response);
        }

    });

};



module.exports = EventAssociate;