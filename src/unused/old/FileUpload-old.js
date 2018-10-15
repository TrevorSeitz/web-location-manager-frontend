import React, { Component } from "react";
import axios from "axios";
import * as EXIF from "exif-js";

export default class FileUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
  }

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });

    EXIF.getData(event.target.files[0], function() {
      // var all = EXIF.getAllTags(this);
      var lat = EXIF.getTag(this, "GPSLatitude");
      var long = EXIF.getTag(this, "GPSLongitude");
      console.log(lat);
      const mapLat =
        lat[0]["numerator"] +
        " " +
        lat[1]["numerator"] +
        "' " +
        lat[2]["numerator"] / 100 +
        '"';
      console.log(mapLat);
      const mapLong =
        long[0]["numerator"] +
        " " +
        long[1]["numerator"] +
        "' " +
        long[2]["numerator"] / 100 +
        '"';
      console.log(mapLong);
    });
  };

  fileUploadHandler = () => {
    const file = this.state.selectedFile;
    const fd = new FormData();
    fd.append("image", file, file.name);
    // fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("http://localhost:4000/api/photos", fd);
  };

  render() {
    return (
      <form onSubmit={this.fileUploadHandler}>
        <div className="fileUpload">
          <label>File Upload</label>
          <div>
            <input type="file" onChange={this.fileSelectHandler} />
            {/*<button onSubmit={this.fileUploadHandler}>Upload!</button>*/}
          </div>
        </div>
      </form>
    );
  }
}
