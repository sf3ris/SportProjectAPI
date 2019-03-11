//import model
let EventTeamManager = require('../../model/events/eventTeam.js');

//local modules import
let inputChecker = require('../../utility/inputChecker.js');

//node_modules
let mysql = require('mysql');

exports.get_all_events_teams = (req,res) => {

    let eventTeamManager = new EventTeamManager();

    let new_eventTeam = eventTeamManager.CreateNewEventTeamEntry(11,1);

    eventTeamManager.GetAllEventsTeams((err,response) => {
        if(err){
            throw err;
        }
        else{

            delete eventTeamManager;

            res.send({
                data: response,
                length: response.length
            })
        }
    })
        
}

exports.get_all_teams_for_an_event = (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));

    inputChecker.parse_int_input(res,idEvent,"Event ID")
        .then( valid => {

            let eventTeamManager = new EventTeamManager();

            eventTeamManager.GetAllTeamsForAnEvent(idEvent,(err,response) => {

                delete eventTeamManager;

                if(err) res.status(500).send({
                    error: true,
                    data: err
                })

                res.send({
                    data: response,
                    length: response.data
                })

            })

        })
        .catch( err => {

            res.status(500).send({
                error: true,
                data: err
            })

        })

}

exports.get_all_events_for_a_team = async(req,res) => {

    let idTeam = mysql.escape(parseInt(req.params.idTeam));

    inputChecker.parse_int_input(res,idTeam,"Team ID")
    .then( valid => {

        let eventTeamManager = new EventTeamManager();

        eventTeamManager.GetAllEventsForATeam(idTeam,(err,response) => {

            if(err) res.status(500).send({
                error: true,
                data: err
            })

            res.send({
                data: response,
                length: response.data
            })

        })

    })
    .catch( err => {

        res.status(500).send({
            error: true,
            data: err
        })

    })


}

exports.get_single_match_team_event = async (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));
    let idTeam = mysql.escape(parseInt(req.params.idTeam));

    try {

        await inputChecker.parse_int_input(res,idEvent,"Event ID");
        await inputChecker.parse_int_input(res,idTeam,"T ID");

        let eventTeamManager = new EventTeamManager();

        eventTeamManager.GetASingleEventForASingleTeam(idEvent,idTeam,(err,response) => {

            delete eventTeamManager;

            if(err) res.status(500).send({
                error: true,
                data: err
            })

            res.send({
                data: response,
                length: response.data
            })

        })


    }
    catch(err){

        res.status(500).send({
            error : true,
            data: err
        })

    }

}


exports.insert_new_event_team = async (req,res) => {

    let eventTeamManager = new EventTeamManager();
    let idEvent = mysql.escape(parseInt(req.body.idEvent));

    console.log(req.body);

    if(req.body.idTeam === '0'){

        eventTeamManager.InsertEveryTeamIntoEvent(idEvent,(err,response) => {

            if(err) res.status(500).send({
                error: true,
                data: err
            })
    
            res.send({
                data: response
            })

        })

    }
    else {
       
        let idTeam = mysql.escape(parseInt(req.body.idTeam));

        await inputChecker.parse_int_input(res,idEvent,"Event ID").catch(err => res.status(500).send({ error: true, message: err}));
        await inputChecker.parse_int_input(res,idTeam, "Team ID").catch(err => res.status(500).send({ error: true, message: err}));
        
        

        let new_eventTeam_object = eventTeamManager.CreateNewEventTeamEntry(idEvent,idTeam);

        eventTeamManager.GetASingleEventForASingleTeam(idEvent,idTeam,(err,rows) => {

            if(err) {
                res.status(500).send({
                    error: true,
                    data: err
                })
            }
            else{
                if(rows > 0){

                    res.status(500).send({
                        error: true,
                        data: "Duped Entry on table"
                    })

                }
                else{

                    eventTeamManager.InsertNewEventTeamRecord(new_eventTeam_object,(err,response) => {

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

}

exports.delete_event_team_entry = async (req,res) => {

    let idEvent = mysql.escape(parseInt(req.params.idEvent));
    let idTeam = mysql.escape(parseInt(req.params.idTeam));

    try{

        await inputChecker.parse_int_input(res,idEvent,"Event ID")
        await inputChecker.parse_int_input(res,idTeam, "Team ID")

        let eventTeamManager = new EventTeamManager();

        eventTeamManager.DeleteEventTeamEntry(idEvent,idTeam,(err,response) => {

            if(err) res.status(500).send({
                error: true,
                data: err
            })

            res.send({
                data: response
            })

        })

    }
    catch(err){
        res.status(500).send({
            err: true,
            data: err
        })
    }

}