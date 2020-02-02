const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const { fetchAllReports, fetchReport } = require('./controllers/reports');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/report/:id', fetchReport);
app.get('/reports', fetchAllReports);

app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.APP_NAME} running on http://localhost:${process.env.SERVER_PORT}/`));
