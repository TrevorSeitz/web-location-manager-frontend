import React, { Component } from "react";
import Map from "./containers/Map";
import NewPlaceForm from "./containers/NewPlaceForm";
import EditPlaceForm from "./containers/EditPlaceForm";
import ShowPlace from "./components/ShowPlace";
import ListLocations from "./containers/ListLocations";
import ListContacts from "./containers/ListContacts";
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
                <Route exact path="/EditPlaceForm" component={EditPlaceForm} />
                <Route exact path="/ShowPlace" component={ShowPlace} />
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
