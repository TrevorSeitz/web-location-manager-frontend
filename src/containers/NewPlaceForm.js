import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import submit from "../submit";
import axios from "axios";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import * as ActiveStorage from "activestorage";
import { NavLink } from "react-router-dom";

class NewPlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      fileName: null,
      name: "",
      venue: "",
      latitude: "",
      longitude: "",
      contactName: "",
      contactPhone: "",
      email: "",
      permit: "",
      description: "",
      GPSLatitudeRef: "",
      GPSLongitudeRef: ""
    };
    this.blankForm = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);

    ActiveStorage.start();
  }

  handleFileSelect(e) {
    let image = e.target.files[0];
    this.setState({ image: image });
    this.setState({ fileName: image.name });
    let mapLat = "";
    let mapLong = "";
    let lat = "";
    let lng = "";
    let latRef = "";
    let lngRef = "";
    let fileNAme = "";
    let that = this;

    if (e.target.files && e.target.files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append("uploaded_image", e.target.files[0]);
    }

    function setProps(mapLat, mapLong, latRef, lngRef) {
      that.props.addLat(mapLat);
      that.props.addLong(mapLong);

      debugger;
      that.setState({ latitude: that.props.fileLat });
      that.setState({ longitude: that.props.fileLong });
      that.setState({ GPSLatitudeRef: latRef });
      that.setState({ GPSLongitudeRef: lngRef });
    }

    function makeReadable(lat, lng, latRef, lngRef) {
      mapLat = parseFloat(
        lat[0]["numerator"] +
          lat[1]["numerator"] / 60 +
          lat[2]["numerator"] / 360000
      ).toFixed(13);

      if (latRef === "S") {
        mapLat = -1 * mapLat;
      } else {
        mapLat = 1 * mapLat;
      }

      mapLong = parseFloat(
        lng[0]["numerator"] +
          lng[1]["numerator"] / 60 +
          lng[2]["numerator"] / 360000
      ).toFixed(13);

      if (lngRef === "W") {
        mapLong = -1 * mapLong;
      } else {
        mapLong = 1 * mapLong;
      }

      setProps(mapLat, mapLong, latRef, lngRef);
    }

    // first function to be hit when handleFileSelect is called
    EXIF.getData(image, function() {
      lat = EXIF.getTag(this, "GPSLatitude");
      lng = EXIF.getTag(this, "GPSLongitude");
      latRef = EXIF.getTag(this, "GPSLatitudeRef");
      lngRef = EXIF.getTag(this, "GPSLongitudeRef");

      makeReadable(lat, lng, latRef, lngRef);
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // let currentPlace = this.state;
    let currentPlace = { place: this.state };
    //  TODO is this working???
    let image = this.state.image;
    debugger;
    // axios.post("http://localhost:4000/api/places", currentPlace, image);
    // axios.post("http://localhost:4000/api/places", currentPlace);
    // formPayLoad = this.state;
    // fetch(`http://localhost:4000/api/places`, {
    //   credentials: "same-origin",
    //   headers: {},
    //   method: "POST",
    //   body: formPayLoad
    // })
    //   .then(response => response.json())
    //   .then(imageFromController => {
    //     // optionally, you can set the state of the component to contain the image
    //     // object itself that was returned from the rails controller, completing
    //     // the post cycle
    //     this.setState({
    //       uploads: this.state.uploads.concat(imageFromController)
    //     });
    //   });
  }

  render() {
    const { reset } = this.props;
    console.log(this.props);
    return (
      <div>
        <NavLink
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          See Contacts
        </NavLink>
        <NavLink
          to="/ListLocations"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          See locations
        </NavLink>
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
                  value="false"
                  checked={false}
                  onChange={this.handleChange}
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
      </div>
    );
  }
}

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

const mapStateToProps = state => {
  // debugger;
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
