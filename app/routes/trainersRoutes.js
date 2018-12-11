module.exports = (app) => {
    var levels = require('../controller/levelController.js')

    app.route('/levels')
        .get(levels.get_all_levels)

}