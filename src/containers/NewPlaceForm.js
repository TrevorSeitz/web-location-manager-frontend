import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import FileUploadForm from "./FileUpload";
import submit from "../submit";
import axios from "axios";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import allReducers from "../reducer";
import getExif from "exif-async";

class NewPlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      venue: "",
      latitude: "",
      longitude: "",
      contactName: "",
      contactPhone: "",
      email: "",
      description: "",
      fileName: null,
      GPSLatitudeRef: "",
      GPSLongitudeRef: ""
    };
    this.blankForm = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }

  handleFileSelect(e) {
    this.setState({ fileName: e.target.files[0].name });
    let mapLat = "";
    let mapLong = "";
    let lat = "";
    let lng = "";
    let latRef = "";
    let lngRef = "";
    let file = e.target.files[0];
    let that = this;

    function setProps(mapLat, mapLong, latRef, lngRef) {
      that.props.addLat(mapLat);
      that.props.addLong(mapLong);

      that.setState({ latitude: that.props.fileLat });
      that.setState({ longitude: that.props.fileLong });
      that.setState({ GPSLatitudeRef: latRef });
      that.setState({ GPSLongitudeRef: lngRef });
      // debugger;
    }

    function makeReadable(lat, lng, latRef, lngRef) {
      mapLat = parseFloat(
        lat[0]["numerator"] +
          lat[1]["numerator"] / 60 +
          lat[2]["numerator"] / 3600
      ).toFixed(6);

      if (latRef === "S") {
        mapLat = -1 * mapLat;
      }

      mapLong = parseFloat(
        lng[0]["numerator"] +
          lng[1]["numerator"] / 60 +
          lng[2]["numerator"] / 3600
      ).toFixed(6);

      if (lngRef === "W") {
        mapLong = -1 * mapLong;
      }
      setProps(mapLat, mapLong, latRef, lngRef);
    }

    const latLong = EXIF.getData(file, function() {
      lat = EXIF.getTag(this, "GPSLatitude");
      lng = EXIF.getTag(this, "GPSLongitude");
      latRef = EXIF.getTag(this, "GPSLatitudeRef");
      lngRef = EXIF.getTag(this, "GPSLongitudeRef");

      console.log("1makeReadable about to start");

      makeReadable(lat, lng, latRef, lngRef);
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentPlace = this.state;
    alert(currentPlace.name);
    axios.post("http://localhost:4000/api/places", currentPlace);
  }

  render() {
    console.log(this.props.addLat);
    const { reset } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>File Upload</label>
          <div>
            <input type="file" onChange={this.handleFileSelect} />
          </div>
          <div>
            <label>Lat/Long</label>

            <div>
              <Field
                name="lat"
                component="input"
                type="text"
                placeholder={this.props.fileLat}
                onChange={this.handleChange}
              />

              <Field
                name="long"
                component="input"
                type="text"
                placeholder={this.props.fileLong}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>Location Name</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>Venue/Region</label>
            <div>
              <Field
                name="venue"
                component="input"
                type="text"
                placeholder="Venue"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>Contact Name</label>
            <div>
              <Field
                name="contactName"
                component="input"
                type="text"
                placeholder="Contact Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>Contact Phone #</label>
            <div>
              <Field
                name="contactPhone"
                component="input"
                type="number"
                placeholder="Contact Phone #"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>Contact Email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="permit">Permit Required?(check for yes)</label>
            <div>
              <Field
                name="permit"
                id="permit"
                component="input"
                type="checkbox"
              />
            </div>
          </div>
          {/* Favorite Color was here */}
          {/* employed Color was here */}
          <div>
            <label>Description and Notes</label>
            <div>
              <Field
                name="description"
                component="textarea"
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* FileUpload here */}
          {/* Buttons here */}
          <div>
            <button
              type="submit"
              // disabled={pristine || submitting}
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              // disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// <div className="fileUpload">
//   <FileUpload />
// </div>

// Favorite Color
// <div>
//   <label>Favorite Color</label>
//   <div>
//     <Field name="favoriteColor" component="select">
//       <option />
//       <option value="ff0000">Red</option>
//       <option value="00ff00">Green</option>
//       <option value="0000ff">Blue</option>
//     </Field>
//   </div>
// </div>

// Radio Buttons
// <div>
//   <label>Permit Required?</label>
//   <div>
//     <label>
//       <Field
//         name="permitYes"
//         component="input"
//         type="radio"
//         value="yes"
//         onChange={this.handleChange}
//       />{" "}
//       Yes
//     </label>
//     <label>
//       <Field
//         name="permitNo"
//         component="input"
//         type="radio"
//         value="no"
//         onChange={this.handleChange}
//       />{" "}
//       No
//     </label>
//   </div>
// </div>

// export default SimpleForm;

// SimpleForm = reduxForm({
//   form: "simple" // a unique identifier for this form
// })(SimpleForm);
//
// export default SimpleForm;

const mapStateToProps = state => {
  return {
    fileLat: state.addLatReducer,
    fileLong: state.addLongReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "newPlace", // a unique identifier for this form
    onSubmit: submit
  })(NewPlaceForm)
);
