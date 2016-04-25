var Player = require('../models/player');

module.exports = function (app) {
  app.route('/api/players')
    .get(function(req, res){
      Player.find(function (error, doc) {
        res.send(doc);
      });
    });
}
