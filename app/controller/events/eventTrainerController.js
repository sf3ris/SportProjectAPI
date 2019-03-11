'use strict';

//model import
let eventTrainer = require('../../model/events/eventTrainerModel.js');

//node_modules
let mysql = require('mysql');

//local modules
let inputChecker = require('../../utility/inputChecker.js');

exports.get_all_events_trainers = (req,res) => {

    eventTrainer.GetAllEventsTrainers((err,response) => {

        if(err) res.status(500).send({
            error:true,
            data:err
        })

        res.send({
            data: response,
            length: response.length
        });

    });

};

exports.get_all_trainers_for_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    inputChecker.parse_int_input(res,idEvent,"Event ID")
        .then(valid => {
            
            eventTrainer.GetAllTrainersForAnEvent(idEvent,(err,response) => {

                if(err) res.status(500).send({
                    error: true,
                    data: err
                })
                
                res.send({
                    data: response,
                    length: response.length
                })

            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                error: true,
                data: err
            });
        });

};

exports.link_trainer_to_an_event = async (req,res) => {

    let new_eventTrainer = new eventTrainer(req.body);
    
   try {
       
       await inputChecker.parse_int_input(res,new_eventTrainer.IDAllenatore,"Event ID");
       await inputChecker.parse_int_input(res,new_eventTrainer.IDEvento,"Event ID");

       //Check For trainer alredy presnt in event
       eventTrainer.GetSingleTrainerForSingleEvent(new_eventTrainer.IDAllenatore,new_eventTrainer.IDEvento, (err,rows) => {

        if(err) {
            res.status(500).send({
                error: true,
                data: err
            });
        }
        else{
            
            if(rows.length > 0){

                res.status(500).send({
                    error: true,
                    data: "Entry already present on event"
                });

            }
            else{

                eventTrainer.LinkTrainerToAnEvent(new_eventTrainer,(err,response) => {

                    if(err) res.status(500).send({
                        error: true,
                        data: err
                    })
                    
                    res.send({
                        data: response
                    })
        
               })

            }

        }
    

    })
   }
   catch(err) {
    res.status(500).send({
        error: true,
        data: err
    });
   }

}

exports.unlink_trainer_from_event = async (req,res) => {

    let idTrainer = mysql.escape(parseInt(req.params.idTrainer));
    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    try{

        await inputChecker.parse_int_input(res,idTrainer,"Event ID");
        await inputChecker.parse_int_input(res,idEvent,"Event ID");

        eventTrainer.UnlinkTrainerFromAnEvent(idTrainer,idEvent,(err,response) => {

            if(err) res.status(500).send({
                error: true,
                data: err
            })
            
            res.send({
                data: response
            })

        })


    }
    catch (err) {
        res.status(500).send({
            error: true,
            data: err
        });
    }

}