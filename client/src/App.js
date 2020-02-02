import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import ListReports from './components/ListReports';
import ViewReport from './components/ViewReport';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
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
