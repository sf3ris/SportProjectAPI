'use strict'

module.exports = (app) => {

    //controller imports
    let eventController = require('../controller/events/eventController.js');
    let eventTypeController = require('../controller/events/eventTypeController.js');
    let eventAthleteController = require('../controller/events/eventAthleteController.js');
    let eventTrainerController = require('../controller/events/eventTrainerController.js');
    let eventAssociateController = require('../controller/events/eventAssociateController.js');
    let eventTeamController = require('../controller/events/eventTeamController.js');

    /*
    * Envents Routes
    */
    app.route('/events')
        .get(eventController.get_all_events)
        .post(eventController.create_new_event);

    app.route('/events/:idEvent')
        .get(eventController.get_single_event)
        .put(eventController.update_an_event)
        .delete(eventController.delete_an_event);

    /*
    * Event's interest Routes
    */
    app.route('/events/:idEvent/athletes')
        .get(eventAthleteController.get_all_athletes_for_an_event)
        .post(eventAthleteController.link_athlete_to_an_event)

    app.route('/events/:idEvent/athletes/:idAthlete')
        .delete(eventAthleteController.unlink_athlete_from_event)

    app.route('/events/:idEvent/trainers')
        .get(eventTrainerController.get_all_trainers_for_an_event)
        .post(eventTrainerController.link_trainer_to_an_event)
    
    app.route('/events/:idEvent/trainers/:idTrainer')
        .delete(eventTrainerController.unlink_trainer_from_event)

    app.route('/events/:idEvent/associates/')
        .get(eventAssociateController.get_all_associates_for_an_event)
        .post(eventAssociateController.link_associate_to_an_event)
    
    app.route('/events/:idEvent/associates/:idAssociate')
        .delete(eventAssociateController.unlink_associate_from_event)

    app.route('/events/:idEvent/teams')
        .get(eventTeamController.get_all_events_teams)
        .post(eventTeamController.insert_new_event_team)
    
    app.route('/events/:idEvent/teams/:idTeam')
        .get(eventTeamController.get_single_match_team_event)
        .delete(eventTeamController.delete_event_team_entry)
    
    /*
    *   Event Types Routes
    */
    app.route('/eventtypes')
        .get(eventTypeController.get_all_event_types)
        .post(eventTypeController.insert_new_event_type)

    app.route('/eventtypes/:idEventType')
        .get(eventTypeController.get_single_event_type)

};