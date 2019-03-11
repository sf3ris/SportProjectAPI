'use strict';

//import model
let Event = require('../../model/events/eventModel.js');

//node_modules import
let mysql = require('mysql');

/**
 *  Controller : Ask model for all events rows
 * 
 * @param  { HTTP_REQUEST } req
 * @param  { HTTP_REQUEST } res
 */
exports.get_all_events = (req,res) => {

    Event.GetAllEvents((err,response) => {

        if(err) res.status(500).send({
            error: true,
            message: response
        });

        res.send({
            data: response,
            length: response.length
        });


    });

};

/**
 *  Controller: Ask model for single event row
 * 
 * @param  { HTTP_REQUEST } req
 * @param  { HTTP_REQUEST } res
 */
exports.get_single_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    if(!parseInt(idEvent)){
        res.status(500).send({
            error: true,
            message: "Please provide a valid Event ID"
        })
    }

    Event.GetSingleEvent(idEvent, (err,response) => {

        if(err) res.status(500).send({
            error: true,
            message: response
        });

        res.send({
            data: response,
            length: response.length
        });

    });

};

/**
 * Create new Event
 * 
 * @param  { HTTP_REQUEST } req
 * @param  { HTTP_REQUEST } res
 */
exports.create_new_event = async (req,res) => {

    let new_event = new Event(req.body);

    console.log(req.body);

    console.log(new_event);

    if(!new_event.Descrizione || !new_event.DataFine || !new_event.DataInizio || !new_event.IDTipoEvento){

        await res.status(500).send({
            error: true,
            message: "Please provide all mandatory data: [Descrizione, DataFine, DataInizio, IDTipoEvento] . "
        })

    }

    Event.CreateNewEvent(new_event,(err,response) => {

        if(err) res.status(500).send({
            error: true,
            message: response
        });

        res.send({
            data: response
        });

    });

};

/**
 *  Delete an Event
 * 
 * @param  { HTTP_REQUEST } req
 * @param  { HTTP_REQUEST } res
 */
exports.delete_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    if(!parseInt(idEvent)){
        res.status(500).send({
            error: true,
            message: "Please provide a valid Event ID"
        });
    }

    Event.DeleteAnEvent( idEvent, (err,response) => {

        if(err) res.status(500).send({
            error: true,
            message: response
        });

        res.send({
            data: response
        });

    });

};

/**
 * Update an Event
 * 
 * @param  { HTTP_REQUEST } req
 * @param  { HTTP_REQUEST } res
 */
exports.update_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    if(!parseInt(idEvent)){
        res.status(500).send({
            error: true,
            message: "Please provide a valid Event ID"
        });
    }

    if(!req.body){

        res.status(500).send({
            error: true,
            message: "Please provide a body with updates"
        });

    }

    Event.UpdateAnEvent( idEvent, req.body, (err,response) => {

        if(err) res.status(500).send({
            error: true,
            message: response
        });

        res.send({
            data: response
        });

    })

}


