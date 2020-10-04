import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import EdPageContainer from "./Education/EdPageContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/biodiversity" component={EdPageContainer} />
          <Route exact path="/ozonedepletion" component={EdPageContainer} />
          <Route exact path="/icyartic" component={EdPageContainer} />
          <Route exact path="/ourocean" component={EdPageContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
