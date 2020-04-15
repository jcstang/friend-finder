const express = require('express');
//const path = require('path');
const chalk = require('chalk');
//const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');
//const friends = require('./app/data/friends');
const expressHandlebars = require('express-handlebars');
const questions = require('./app/data/questions');
const helper = require('./helperFunctions');

const app = express();
const PORT = process.env.PORT || 8085;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use('/api', apiRouter);
// app.use('/', htmlRouter);
app.use(express.static('public'));
app.use(express.static('public/views'));


// HTML routes
// =================================================
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/survey', function(req, res) {
  res.render('survey', questions);
});


// TODO: figure out how to compare currentFriend to db of friends.
// TODO: Pass data from survey to express
// TODO: Figure out the friend find algorithm

console.log(helper.compareTwoFriends());





app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});