const path = require('path');
const fs = require('fs');
const axios = require('axios');

const dataPath = path.join(__dirname, '../..', 'data');

exports.fetchAllReports = (req, res, next) => {
  try {
    fs.readdir(dataPath, async (err, files) => {
      if (err) {
        return next(err);
      }
  
      const reports = files.map(file => getFile(file, dataPath));
      const reportsWithWeather = await Promise.all(reports.map(getWeather));
      return res.send(reportsWithWeather);
    });
  } catch (err) {
    res.status(500);
    return res.send({ message: 'An error occured reading reports', details: err });
  }
};

exports.fetchReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = getFile(`${id}.json`, dataPath);
    const reportWithWeather = await getWeather(report);
    return res.send(reportWithWeather);
  } catch(err) {
    res.status(500);
    return res.send({ message: 'Invalid incident number', details: err });
  }
};

const getFile = (fileName, currPath) => {
  const filePath = path.join(currPath, fileName);
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

const getWeather = async report => {
  try {
    const { description, address } = report;
    const { latitude, longitude } = address;
    const { event_opened } = description;
    const timestamp = dateToUnixTime(event_opened);
  
    const { data: weather } = await axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET}/${latitude},${longitude},${timestamp}`);
  
    return {
      ...report,
      weather
    };
  } catch (err) {
    return {
      ...report,
      weather: null
    };
  }
};

const dateToUnixTime = date => {
  if (date) {
    return Math.floor(new Date(date).getTime() / 1000);
  }
}
