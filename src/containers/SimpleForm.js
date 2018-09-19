import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import FileUploadForm from "./FileUpload";
import submit from "../submit";
import axios from "axios";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import allReducers from "../reducer";

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      venue: "",
      lat: "",
      lng: "",
      contactName: "",
      contactPhone: "",
      email: "",
      permitYes: "",
      permitNo: "",
      notes: "",
      selectedFile: null
    };
    this.blankForm = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    // let mapLat = "";
    // let mapLong = "";
  }
  // let mapLat = ''
  // let mapLong = ''

  handleFileSelect(e) {
    this.setState({ selectedFile: e.target.files[0] });
    var mapLat = "";
    let mapLong = "";

    const latLong = EXIF.getData(e.target.files[0], function() {
      var lat = EXIF.getTag(this, "GPSLatitude");
      var lng = EXIF.getTag(this, "GPSLongitude");
      mapLat =
        lat[0]["numerator"] +
        " " +
        lat[1]["numerator"] +
        "' " +
        lat[2]["numerator"] / 100 +
        '"';
      // console.log(mapLat);
      mapLong =
        lng[0]["numerator"] +
        " " +
        lng[1]["numerator"] +
        "' " +
        lng[2]["numerator"] / 100 +
        '"';
      // console.log(mapLong);
    });
    // debugger;
    // console.log(mapLat);
    // console.log(mapLong);
    // console.log(this.props.addLat(mapLat));
    debugger;
    var bob = this.state.lat;
    this.props.addLat(mapLat);
    this.props.addLong(mapLong);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentPlace = this.state;
    alert(currentPlace.locationName);
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
                name="locationName"
                component="input"
                type="text"
                placeholder="Location Name"
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
            <label>Permit Required?</label>
            <div>
              <label>
                <Field
                  name="permitYes"
                  component="input"
                  type="radio"
                  value="yes"
                  onChange={this.handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <Field
                  name="permitNo"
                  component="input"
                  type="radio"
                  value="no"
                  onChange={this.handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>
          {/* Favorite Color was here */}
          {/* employed Color was here */}
          <div>
            <label>Notes</label>
            <div>
              <Field
                name="notes"
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

// Employed
// <div>
//   <label htmlFor="employed">Employed</label>
//   <div>
//     <Field
//       name="employed"
//       id="employed"
//       component="input"
//       type="checkbox"
//     />
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
    fileLat: state.latReducer,
    fileLong: state.longReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "simple", // a unique identifier for this form
    onSubmit: submit
  })(SimpleForm)
);
