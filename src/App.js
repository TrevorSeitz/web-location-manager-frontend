import React, { Component } from "react";
import { Map } from "./components/Map";
import SimpleForm from "./components/SimpleForm";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="map">
          <Map />
        </div>
        <div className="form">
          <SimpleForm />
        </div>
      </div>
    );
  }
}

export default App;
