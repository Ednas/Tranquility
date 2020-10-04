import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import EdPageContainer from "./Education/EdPageContainer";
import Biodiversity from './Education/Biodiversity';
import Arctic from './Education/Arctic';
import Ocean from './Education/Ocean';
import Ozone from './Education/Ozone';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/biodiversity" component={Biodiversity} />
          <Route exact path="/ozonedepletion" component={Ozone} />
          <Route exact path="/icyartic" component={Arctic} />
          <Route exact path="/ourocean" component={Ocean} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
