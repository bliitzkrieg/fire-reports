import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Map from '../Map';
import './ViewReport.css';

export default () => {
  let { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/report/${id}`);
        const report = await response.json();
        setReport(report);
      } catch (err) {
        console.error(err);
        setReport(null);
      }
    }

    fetchData();
  }, [id]);

  if (!report) {
    return "Fetching...";
  }
  
  const { latitude, longitude, address_line1, city } = report.address;
  const { comments, event_opened, event_closed, subtype, type } = report.description;
  const { summary, temperature } = report.weather.currently;
  return (
    <div className="report-details">
      <h2>Incident: {id}</h2>
      <Map latitude={latitude} longitude={longitude} />

      <h4>Address:</h4>
      <div>{address_line1}, {city} ({latitude}, {longitude})</div> 

      <h4>Weather</h4>
      <div>{summary} - {temperature}F</div>

      <h4>Type:</h4>
      <div>{type}</div>    

      <h4>Subtype:</h4>
      <div>{subtype}</div>      
      
      <h4>Event Opened:</h4>
      <div>{event_opened}</div>

      <h4>Event Closed:</h4>
      <div>{event_closed}</div>

      <h4>Comments:</h4>
      <div>{comments}</div>
    </div>
  );
};
