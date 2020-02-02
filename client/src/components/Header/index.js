import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

export default () => {
  return (
    <Link to="/">
      <header>
        <img src='/logo.jpg' alt="Fire Reports Logo" />
        <h1>Fire Reports</h1>
      </header>
    </Link>
  );
};
