import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './ListReports.css';

function useReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/reports`);
        const reports = await response.json();
        setReports(reports);
      } catch (err) {
        console.error(err);
        setReports([]);
      }
    }

    fetchData();
  }, []);

  return reports
}

export default () => {
  const reports = useReports();

  if (reports.length === 0) {
    return "Fetching...";
  }

  return (
    <div className="reports">
      { reports.map(report => (
        <div className="report" key={report.description.incident_number}>
          <Link to={`/report/${report.description.incident_number}`}>
            {report.description.incident_number}
          </Link>
        <div>{report.address.address_line1}, {report.address.city}</div>
        <div>{report.description.subtype} - {report.description.type} </div>
        <div>{report.fire_department.name}</div>
        <div>Weather: {report.weather && report.weather.currently.summary}</div>
        </div>
      ))}
    </div>
  );
};
