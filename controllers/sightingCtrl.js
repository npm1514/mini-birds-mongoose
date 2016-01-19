var sightingModel = require('./../models/sightingModel');

module.exports = {
  create: function(req, res) {
    var sighting = new sightingModel(req.body);
    sighting.save(function(err, result){
      res.send(result);
    });
  },
  read: function(req, res) {
    sightingModel
    .find(req.query)
    .exec(function (err, result) {
      res.send(result);
    });
  },
  update: function(req, res){
    sightingModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  },
  delete: function(req, res){
    sightingModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  }
};
