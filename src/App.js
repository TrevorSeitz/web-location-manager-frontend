import React, { Component } from "react";
import Map from "./containers/Map";
import Routes from "./Routes";
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
