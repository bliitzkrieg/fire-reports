import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ListReports from './containers/ListReports';
import ViewReport from './containers/ViewReport';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ListReports />
          </Route>
          <Route path="/report/:id">
            <ViewReport />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
