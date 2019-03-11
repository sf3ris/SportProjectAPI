'use strict';

//model import
let eventAthlete = require('../../model/events/eventAthleteModel.js');

//node_modules
let mysql = require('mysql');

//local modules
let inputChecker = require('../../utility/inputChecker.js');

exports.get_all_events_athletes = (req,res) => {

    eventAthlete.GetAllEventsAthletes((err,response) => {

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

exports.get_all_athletes_for_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    inputChecker.parse_int_input(res,idEvent,"Event ID")
        .then(valid => {
            
            eventAthlete.GetAllAthletesForAnEvent(idEvent,(err,response) => {

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

exports.link_athlete_to_an_event = async (req,res) => {

    let new_eventAthlete = new eventAthlete(req.body);
    
   try {
       
       await inputChecker.parse_int_input(res,new_eventAthlete.IDAtleta,"Event ID");
       await inputChecker.parse_int_input(res,new_eventAthlete.IDEvento,"Event ID");

       //Check For athlete alredy presnt in event
       eventAthlete.GetSingleAthleteFromSingleEvent(new_eventAthlete.IDAtleta,new_eventAthlete.IDEvento, (err,rows) => {

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

                    eventAthlete.LinkAthleteToAnEvent(new_eventAthlete,(err,response) => {

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

exports.unlink_athlete_from_event = async (req,res) => {

    let idAthlete = mysql.escape(parseInt(req.params.idAthlete));
    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    try{

        await inputChecker.parse_int_input(res,idAthlete,"Event ID");
        await inputChecker.parse_int_input(res,idEvent,"Event ID");

        eventAthlete.UnlinkAthleteFromAnEvent(idAthlete,idEvent,(err,response) => {

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