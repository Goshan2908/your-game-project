const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/ourGame'

mongoose.connect(uri, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Team = require('./models/Team');
const Question = require('./models/question');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/teams', async (req, res) => {
  let team1 = await Team.findOne({ name: req.body.team1 })
  let team2 = await Team.findOne({ name: req.body.team2 })
  return res.send({
    team1: team1, team2: team2
  })
})


app.get('/gameJson', async (req, res) => {
  const games = await Question.find()
  let gamesToSend = [
    { collectionTitle: 'Математика', questions: [] },
    { collectionTitle: 'Русский язык', questions: [] },
    { collectionTitle: 'Месяцы', questions: [] },
    { collectionTitle: 'Шекспир', questions: [] },
    { collectionTitle: 'Вечная тема', questions: [] },
    { collectionTitle: 'Одна буква', questions: [] }]
  gamesToSend.forEach(acc => {
    games.forEach((el) => {
      if (el.collectionTitle === acc.collectionTitle) {
        acc.questions.push(el)
      }
    })
  })
  res.send(gamesToSend)
})


app.post('/auth', async (req, res) => {
  let team1 = await Team.findOne({ name: req.body.team1 })
  let team2 = await Team.findOne({ name: req.body.team2 })
  if (!team1) {
    team1 = await Team.create({ name: req.body.team1 })
  }
  if (!team2) {
    team2 = await Team.create({ name: req.body.team2 })
  }
  res.send({
    team1: team1.name,
    rating1: team1.rating,
    team2: team2.name,
    rating2: team2.rating,
    isTeam1Active: true
  })
})

app.post('/finish', async (req, res) => {
  if (req.body.team1 && req.body.team2) {
    await Team.updateOne({ name: req.body.team1 }, {
      $inc: { rating: req.body.rating1 }, $push: {
        rounds: {
          enemy: req.body.team2,
          myRating: req.body.rating1,
          enemyRating: req.body.rating2,
        }
      }
    })
    await Team.updateOne({ name: req.body.team2 }, {
      $inc: { rating: req.body.rating2 }, $push: {
        rounds: {
          enemy: req.body.team1,
          myRating: req.body.rating2,
          enemyRating: req.body.rating1,
        }
      }
    })
  }
  res.end()
})

app.listen(3001)
