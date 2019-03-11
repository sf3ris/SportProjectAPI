'use strict'

//node_modules
let mysql = require('mysql');

//import Event Type Model
let eventTypeModel = require('../../model/events/eventTypeModel.js');

exports.get_all_event_types = (req,res) => {

    eventTypeModel.GetAllTypes((err,response) => {

        if(err) res.status(500).send({
            error: true,
            data: response
        });

        res.send({
            data: response,
            length: response.length
        });

    });

};


exports.get_single_event_type = (req,res) => {

    let idEventType = mysql.escape(parseInt(req.params.idEventType));

    if(!idEventType){

        res.status(500).send({
            error: true,
            data: "Please provide a valid Integer ID"
        })
    }

    eventTypeModel.GetSingleType(idEventType,(err,response) => {

        if(err) res.status(500).send({
            error: true,
            data: response
        });

        res.send({
            data: response,
            length: response.length
        });

    });

};

exports.insert_new_event_type = (req,res) => {

    let new_eventType = new eventTypeModel(req.body);

    if(!new_eventType.DescrizioneBreve || !new_eventType.DescrizioneLunga){

        res.status(500).send({
            error: true,
            data: "Please provide at least one type of description"
        });

    }

    eventTypeModel.InsertNewType(new_eventType, (err,response) => {

        if(err) res.status(500).send({
            error: true,
            data: response
        });

        res.send({
            data: response
        });

    })

}