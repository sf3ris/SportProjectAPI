'use strict'

//import connection
let db = require('../database.js');

let EventType = function(eventType) {

    this.DescrizioneBreve = eventType.DescrizioneBreve;
    this.DescrizioneLunga = eventType.DescrizioneLunga;

}

/**
 * Retrieve all Event's types
 * 
 * @param  { callback } result : result's rows
 */
EventType.GetAllTypes = (result) => {

    let QUERY_GET_ALL_TYPES = " SELECT T.IDTipoEvento as value, T.DescrizioneLunga as label, T.* FROM EventoTipo T;";

    db.query( QUERY_GET_ALL_TYPES, (err,rows) => {

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
 * @param  { number } idEventType : Event Type ID
 * @param  { callback } result : result's rows
 */
EventType.GetSingleType = (idEventType,result) => {

    let QUERY_GET_SINGLE_TYPES = " SELECT T.IDTipoEvento as value, T.DescrizioneLunga as label, T.* FROM EventoTipo T WHERE IDTipoEvento = ?;";

    db.query( QUERY_GET_SINGLE_TYPES, idEventType, (err,rows) => {

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
 *  Insert a new object entry inside table
 * 
 * @param  { Object } new_eventType : New Event Type Object
 * @param  { callback } result : insert response
 */
EventType.InsertNewType = (new_eventType, result) => {

    let QUERY_INSERT_NEW_TYPE = "INSERT INTO TipoEvento SET ?";

    db.query( QUERY_INSERT_NEW_TYPE, new_eventType,(err,success) => {

        if(err){
            console.log(err);
            result(err,null);
        }
        else{

            result(null,success);

        }

    });

};


module.exports = EventType;