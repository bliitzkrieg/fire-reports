const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

const { fetchAllReports, fetchReport } = require('./routes/reports');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/reports', fetchAllReports);
app.get('/report/:id', fetchReport);

app.listen(config.serverPort, () => console.log(`${config.appName} running on http://localhost:${config.serverPort}/`));
