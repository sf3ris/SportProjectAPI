'use strict';

//model import
let eventAssociate = require('../../model/events/eventAssociateModel.js');

//node_modules
let mysql = require('mysql');

//local modules
let inputChecker = require('../../utility/inputChecker.js');

exports.get_all_events_associates = (req,res) => {

    eventAssociate.GetAllEventsAssociates((err,response) => {

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

exports.get_all_associates_for_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    inputChecker.parse_int_input(res,idEvent,"Event ID")
        .then(valid => {
            
            eventAssociate.GetAllAssociatesForAnEvent(idEvent,(err,response) => {

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

exports.link_associate_to_an_event = async (req,res) => {

    let new_eventAssociate = new eventAssociate(req.body);
    
   try {
       
       await inputChecker.parse_int_input(res,new_eventAssociate.IDSocio,"Event ID");
       await inputChecker.parse_int_input(res,new_eventAssociate.IDEvento,"Event ID");

       //Check For athlete alredy presnt in event
       eventAssociate.GetSingleAssociateForSingleEvent(new_eventAssociate.IDSocio,new_eventAssociate.IDEvento, (err,rows) => {

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

                eventAssociate.LinkAssociateToAnEvent(new_eventAssociate,(err,response) => {

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

exports.unlink_associate_from_event = async (req,res) => {

    let idAssociate = mysql.escape(parseInt(req.params.idAssociate));
    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    try{

        await inputChecker.parse_int_input(res,idAssociate,"Event ID");
        await inputChecker.parse_int_input(res,idEvent,"Event ID");

        eventAssociate.UnlinkAssociateFromAnEvent(idAssociate,idEvent,(err,response) => {

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