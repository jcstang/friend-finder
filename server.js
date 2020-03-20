const express = require('express');
const path = require('path');
const chalk = require('chalk');
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

const app = express();
const PORT = process.env.PORT || 8085;

app.use('/api', apiRouter);
app.use('/', htmlRouter);
app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});