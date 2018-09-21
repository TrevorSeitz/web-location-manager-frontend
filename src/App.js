import React, { Component } from "react";
import { Map } from "./components/Map";
import { NavBar } from "./components/NavBar";
import NewPlaceForm from "./containers/NewPlaceForm";
// import FileUploadForm from "./components/FileUpload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="map">
          <Map />
        </div>
        <div className="form">
          {/*<NavBar />*/}
          <NewPlaceForm />
        </div>
      </div>
    );
  }
}

export default App;
