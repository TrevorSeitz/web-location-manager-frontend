import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import submit from "../submit";
// import ExifReader from "exifreader";
import axios from "axios";
import * as EXIF from "exif-js";

export default class FileUpload extends Component {
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
    // getExif()
    // function getExif() {
    EXIF.getData(event.target.files[0], function() {
      var all = EXIF.getAllTags(this);
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
    // }
    debugger;
  };

  fileUploadHandler = () => {
    // console.log(this.state.selectedFile);
    const file = this.state.selectedFile;
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("http://localhost:4000/api/photos", fd);
  };

  render() {
    // const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={this.fileUploadHandler}>
        <div className="fileUpload">
          {/*<label>File Upload</label>*/}
          <div>
            <input type="file" onChange={this.fileSelectHandler} />
            <button onSubmit={this.fileUploadHandler}>Upload!</button>
          </div>
        </div>
      </form>
    );
  }
}
