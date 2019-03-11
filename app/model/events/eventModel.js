'use strict'

//import db connection
let db = require('../database.js');

/**
 *  Event Object
 * 
 * @param  {} event
 */
let Event = function(event) {

    this.Descrizione = event.Descrizione;           //Event Description / title
    this.DataInizio = event.DataInizio;             //Event Start Date
    this.DataFine = event.DataFine;                 //Event End Date
    this.CreatoDa = event.CreatoDa;                 //Event Creator
    this.IDTipoEvento = event.IDTipoEvento;         //Event Type ID => Foreign Key (EventoTipo)        

}   

/**
 * Retrieve all Event's Rows
 * 
 * @param  { callback } result : callback 
 */
Event.GetAllEvents = (result) => {

    let QUERY_GET_ALL_EVENTS = "SELECT DISTINCT IDEvento, Descrizione, title, IDTipoEvento, DescrizioneBreveTipoEvento, DescrizioneLungaTipoEvento, DataInizio, DataFine, \
                                CreatoDa, CreatoIl \
                                FROM Elenco_Eventi;";

    db.query(QUERY_GET_ALL_EVENTS, (err,rows) => {

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
 * Retrieve single Event Details
 * 
 * @param  { id } idEvent : Event ID
 * @param  { callback } result : callback rows
 */
Event.GetSingleEvent = (idEvent, result) => {

    let QUERY_GET_SINGLE_EVENT = "SELECT * FROM Elenco_Eventi WHERE IDEvento = ?";

    db.query( QUERY_GET_SINGLE_EVENT, idEvent, (err,rows) => {

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
 * Create a new Event
 * 
 * @param  { Event Object } new_event
 * @param  { callback } result
 */
Event.CreateNewEvent = (new_event, result) => {

    let QUERY_CREATE_NEW_EVENT = " INSERT INTO Evento SET ? ";

    db.query(QUERY_CREATE_NEW_EVENT, new_event, (err,success) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,success);
        }

    });

};

/**
 * Delete an Event Entries from the Event Table
 * 
 * @param  { number } idEvent : Event ID
 * @param  { callback } result
 */
Event.DeleteAnEvent = (idEvent, result) => {

    let QUERY_REMOVE_AN_EVENT = "DELETE FROM Evento WHERE IDEvento = ?";

    db.query( QUERY_REMOVE_AN_EVENT, idEvent, (err,success) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,success);
        }

    });

};


Event.UpdateAnEvent = (idEvent, new_event, result) => {

    QUERY_UPDATE_AN_EVENT = "UPDATE Evento SET ? WHERE IDEvento = ?";

    db.query(QUERY_UPDATE_AN_EVENT, [new_event,idEvent], (err,success) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,success);
        }

    });

};



module.exports = Event;