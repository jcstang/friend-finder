const express = require('express');
const path = require('path');
const chalk = require('chalk');
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');
const friends = require('./app/data/friends');

const app = express();
const PORT = process.env.PORT || 8085;

app.use('/api', apiRouter);
app.use('/', htmlRouter);
app.use(express.static('public'));

// friends.forEach(element => {
//   console.log(element.scores);
// });

// TODO: figure out how to compare currentFriend to db of friends.
// TODO: Total friend list api
// TODO: Build homepage
// TODO: Build survey page
// TODO: Pass data from survey to express
// TODO: Figure out the friend find algorithm




app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});