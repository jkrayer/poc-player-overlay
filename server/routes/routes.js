var Player = require('../models/player');

module.exports = function (app) {
  app.route('/api/players')
    .get(function(req, res){
      Player.find(function (error, doc) {
        res.send(doc);
      });
    });
  app.route('/api/players/:id')
    .patch(function(req, res) {
      Player.findOne({
        _id: req.body._id
      }, function (error, doc) {
        for (var key in req.body) {
          doc[key] = req.body[key];
        }
        doc.save();
        res.status(200).send();
      });
    });
}
