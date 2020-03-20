const express = require('express');
const path = require('path');
const chalk = require('chalk');
const htmlRouter = require('./app/routing/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8085;

app.use('/', htmlRouter);
// app.set(path.join(__dirname, 'public'));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('hi');
// });

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.cyanBright(PORT)}`);
});