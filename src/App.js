import React, { Component } from "react";
import { Map } from "./components/Map";
import SimpleForm from "./components/SimpleForm";
import FileUpload from "./components/FileUpload";
import "./App.css";
// import Navbar from "./components/Info";

class App extends Component {
  render() {
    return (
      <div>
        <div className="map">
          <Map />
        </div>
        <div className="form">
          <FileUpload />
          <SimpleForm />
        </div>
      </div>
    );
  }
}

export default App;
