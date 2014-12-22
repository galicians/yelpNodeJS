var ctrl = require('../controllers/event_server_controller');

module.exports = function(app){
    app.route('/events').get(ctrl.getAllEvents);
    app.route('/events/:id').get(ctrl.findSingle);
};