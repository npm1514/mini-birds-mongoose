var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema();

module.exports = mongoose.model('Bird', birdSchema);
