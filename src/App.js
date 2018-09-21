import React, { Component } from "react";
import { Map } from "./components/Map";
import NewPlaceForm from "./containers/NewPlaceForm";
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
          <NewPlaceForm />
        </div>
      </div>
    );
  }
}

export default App;
