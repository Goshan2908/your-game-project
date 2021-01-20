const mongoose = require('mongoose');

const Team = mongoose.model('Team', {
  name: String,
  rating: { type: Number, default: 0 },
  rounds: { type: Array, default: [] }
})

module.exports = Team;
