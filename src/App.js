import React, { Component } from "react";
import Map from "./containers/Map";
import NewPlaceForm from "./containers/NewPlaceForm";
import EditPlaceForm from "./containers/EditPlaceForm";
import ShowPlace from "./components/ShowPlace";
import ListLocations from "./components/ListLocations";
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
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={NewPlaceForm} />
                <Route
                  exact
                  path="/places/visible_locations"
                  component={ListLocations}
                />
                <Route
                  exact
                  path="/places/all_contacts"
                  component={ListContacts}
                />
                <Route path="/places/:id/edit" component={EditPlaceForm} />
                <Route path="/places/:id" component={ShowPlace} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
