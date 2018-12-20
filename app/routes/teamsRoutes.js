module.exports = (app) => {

    var teams = require('../controller/teamController');
    var teamAthlete = require('../controller/teamAthletecontroller');
    var teamTrainer = require('../controller/teamTrainerController');
    var teamAssociate = require('../controller/teamAssociateController');

    // Teams Routes
    app.route('/teams')
        .get(teams.get_all_teams)
        .post(teams.add_new_team);
    
    //Single Team Routes
    app.route('/teams/:idteam')
        .get(teams.get_a_team)
        .put(teams.update_a_team)
        .delete(teams.delete_a_team);

    //Team's Athletes Routes
    app.route('/teams/:idteam/athletes')
        .get(teamAthlete.get_a_team_athletes)
        .post(teamAthlete.link_athletes_into_team);

    //Team's Athlete's Routes
    app.route('/teams/:idteam/athletes/:idathlete')
        .get(teamAthlete.get_a_team_athlete_info)
        .put(teamAthlete.change_athlete_team)
        .delete(teamAthlete.remove_athlete_from_team);

    //Team's Trainers Routes
    app.route('/teams/:idteam/trainers/')
        .get(teamTrainer.get_a_team_trainers)
        .post(teamTrainer.link_trainers_into_team);
    
    //Team's Trainer's Routes
    app.route('/teams/:idteam/trainers/:idtrainers')
        .get(teamTrainer.get_a_team_trainer_info)
        .put(teamTrainer.change_trainer_team)
        .delete(teamTrainer.remove_trainer_from_team);
    
    //Team's Associates Routes
     app.route('/teams/:idteam/associates/')
        .get(teamAssociate.get_a_team_associates)
        .post(teamAssociate.link_associates_into_team);
        
    //Teams's Associate's Routes
    app.route('/teams/:idteam/associates/:idassociate')
        .get(teamAssociate.get_a_team_associate_info)
        .put(teamAssociate.change_associate_team)
        .delete(teamAssociate.remove_associate_from_team);
    
};