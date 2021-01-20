const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
  collectionTitle: String,
  question: String,
  answer: String,
  value: Number
})

module.exports = Question;
