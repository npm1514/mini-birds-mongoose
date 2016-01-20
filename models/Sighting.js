var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  bird: [{
    name: {type: 'String', lowercase: true},
    order: {type: 'String', maxlength: 20},
    status: {
      type: 'String',
      lowercase:true,
      enum: ['extinct','extinct in the wild','critically endangered', 'endangered', 'vulnerable', 'near threatened', 'near threatened', 'conservation dependent', 'least concern'
      ]
    }
  }],
  confirmed: {type: 'Boolean', default: false},
  numberSeen: {type: 'Number', min: 1}
});

module.exports = mongoose.model('Sighting', sightingSchema);
