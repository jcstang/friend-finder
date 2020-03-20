const express = require('express');
const path = require('path');
const chalk = require('chalk');
const htmlRouter = require('./app/routing/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8085;

app.use('/', htmlRouter);

// app.get('/', (req, res) => {
//   res.send('hi');
// });

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});