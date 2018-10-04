import React, { Component } from "react";
import Map from "./containers/Map";
import Routes from "./Routes";
import NewPlaceForm from "./containers/NewPlaceForm";
import EditPlaceForm from "./containers/EditPlaceForm";
import ShowPlace from "./components/ShowPlace";
import ListLocations from "./components/ListLocations";
import ListContacts from "./components/ListContacts";
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
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
