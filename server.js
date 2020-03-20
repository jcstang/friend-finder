const express = require('express');
const path = require('path');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 8085;

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});