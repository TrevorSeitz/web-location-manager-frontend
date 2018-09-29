import React, { Component } from "react";
import Map from "./containers/Map";
import NavBar from "./components/NavBar";
import NewPlaceForm from "./containers/NewPlaceForm";
import ListLocations from "./components/ListLocations";
import ListContacts from "./components/ListContacts";
import * as actions from "./actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="map">
          <Map />
        </div>
        <div className="not-map">
          {/*          <div className="navbar">
            <NavBar />
          </div>*/}
          <div>
            <Router>
              <Switch>
                {/*<Route exact path="/" component={ListContacts} />*/}
                <Route exact path="/" component={NewPlaceForm} />
                <Route exact path="/ListLocations" component={ListLocations} />
                <Route exact path="/ListContacts" component={ListContacts} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="form">
//   {/*<NavBar />*/}
//   <NewPlaceForm />
// </div>
// {div className="locList">
//   <ListLocations />
// </div>

export default App;
