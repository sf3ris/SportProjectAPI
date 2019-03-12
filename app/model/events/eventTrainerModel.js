'use strict';

//import database connection
let db = require('../database.js');

/** Class Object
 * @param  { input object } eventTrainer
 */
let EventTrainer = function(eventTrainer) {

    this.IDEvento = eventTrainer.IDEvento;
    this.IDAllenatore = eventTrainer.IDAllenatore;

};

/**
 * Retrieve all invited trainers for every event
 * 
 * @param  { callback } result : result's rows
 */
EventTrainer.GetAllEventsTrainers = (result) =>{

    let QUERY_GET_ALL_EVENTS_ATHLETES = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Allenatore';";

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
 * Retrieve all trainer's rows for an event
 * 
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : event's interested trainers rows
 */
EventTrainer.GetAllTrainersForAnEvent = (idEvent,result) => {

    let QUERY_GET_ALL_ATHLETES = "SELECT DISTINCT * FROM Elenco_EventiSquadraInteressati WHERE TipoInteresse = 'Allenatore' AND IDEvento = ?;";

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
 * Retrieve all events for a given trainer
 * @param  { number } idTrainer : Trainer ID
 * @param  { callback } result : query result
 */
EventTrainer.GetAllEventsForAnTrainer = (idTrainer,result) => {

    let QUERY_GET_ALL_EVENTS = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Allenatore' AND IDTipologiaInteressato = ?;";

    db.query( QUERY_GET_ALL_EVENTS, idTrainer, (err,rows) => {

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
 * Retrieve single row for a combination of trainer / event
 * 
 * @param  { number } idTrainer : Athlete ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventTrainer.GetSingleTrainerForSingleEvent = (idTrainer,idEvent,result) => {

    let QUERY_GET_ATHLETE_EVENT = "SELECT * FROM Elenco_EventiInteressati WHERE TipoInteresse = 'Allenatore' AND IDTipologiaInteressato = ? and IDEvento = ?;";

    db.query( QUERY_GET_ATHLETE_EVENT, [idTrainer,idEvent], (err,rows) => {

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
 * Link an Trainer to An Event
 * 
 * @param  { Object } new_eventTrainer : EventTrainer Object
 * @param  { callback } result : query result
 */
EventTrainer.LinkTrainerToAnEvent = (new_eventTrainer,result) => {

    let QUERY_LINK_ATHLETE_EVENT = "INSERT INTO EventoInteresseAllenatore SET ? ";

    db.query( QUERY_LINK_ATHLETE_EVENT, new_eventTrainer, (err,response) => {

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
 * Remove an Trainer from an Event
 *  
 * @param  { number } idTrainer : Trainer ID
 * @param  { number } idEvent : Event ID
 * @param  { callback } result : query result
 */
EventTrainer.UnlinkTrainerFromAnEvent = (idTrainer, idEvent, result) => {

    let QUERY_REMOVE_ATHLETE_FROM_EVENT = "DELETE FROM EventoInteresseAllenatore WHERE IDAllenatore = ? AND IDEvento = ?";

    db.query( QUERY_REMOVE_ATHLETE_FROM_EVENT, [idTrainer, idEvent], (err,response) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,response);
        }

    });

};



module.exports = EventTrainer;