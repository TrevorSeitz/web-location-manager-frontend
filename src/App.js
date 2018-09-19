import React, { Component } from "react";
import { Map } from "./components/Map";
import SimpleForm from "./containers/SimpleForm";
// import FileUploadForm from "./components/FileUpload";
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
          <SimpleForm />
        </div>
      </div>
    );
  }
}

export default App;
