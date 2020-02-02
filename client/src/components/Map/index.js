import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import Pin from '../Pin';

import 'mapbox-gl/dist/mapbox-gl.css';

export default ({ latitude, longitude }) => {
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 400,
    zoom: 14,
    latitude,
    longitude
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}>
        <Pin latitude={latitude} longitude={longitude} />
    </ReactMapGL>
  );
};
