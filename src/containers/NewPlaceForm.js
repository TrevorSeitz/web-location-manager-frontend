import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import submit from "../submit";
import axiosClient from "../axiosClient";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import * as ActiveStorage from "activestorage";
import { NavLink, Link } from "react-router-dom";

class NewPlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        id: this.props.match.params.id,
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
      },
      // allPlaces: [],
      selectedPlaceImageFiles: [],
      submitFormProgress: 0,
      isSubmittingForm: false,
      didFormSubmissionComplete: false,
      center: this.props.center
    };

    ActiveStorage.start();
  }

  handleFileSelect = e => {
    const image = e.target.files[0];
    const place = this.state.place;
    place.image = image;
    place.fileName = image.name;
    let mapLat = "";
    let mapLong = "";
    let lat = "";
    let lng = "";
    let latRef = "";
    let lngRef = "";
    let fileName = "";

    const setProps = (mapLat, mapLong, latRef, lngRef) => {
      const place = this.state.place;

      this.props.addLat(mapLat);
      this.props.addLong(mapLong);

      place.latitude = this.props.fileLat;
      place.longitude = this.props.fileLong;
      place.GPSLatitudeRef = latRef;
      place.GPSLongitudeRef = lngRef;
    };

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
  };

  handleChange = e => {
    const place = this.state.place;
    place[e.target.name] = e.target.value;
  };

  handleSubmit = e => {
    e.preventDefault();

    const place = this.state.place;
    this.setState(
      {
        isSubmittingForm: true,
        place: place
      },
      () => {
        this.submitForm(this);
      }
    );
  };

  submitForm = () => {
    const submitMethod = "post";
    const url = "/api/places";
    axiosClient[submitMethod](url, this.buildFormData(), {
      onUploadProgress: progressEvent => {
        let percentage = (progressEvent.loaded * 100.0) / progressEvent.total;
        this.setState({
          submitFormProgress: percentage
        });
      }
    })
      .then(response => {
        this.props.getLocations(
          null,
          this.props.bounds[0],
          this.props.bounds[1],
          this.props.bounds[2],
          this.props.bounds[3]
        );
        this.props.history.push({
          pathname: "/places/{this.state.place.id}",
          state: {
            place: this.state.place,
            places: this.props.allPlaces
          }
        });
      })
      .catch(error => {
        const place = this.state.place;
        // place.errors = error.response.data;
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          place: place
        });
      });
  };

  renderUploadFormProgress = () => {
    if (this.state.isSubmittingForm === false) {
      return null;
    }
    return (
      <div className="progress">
        <div
          className={
            "progress-bar progress-bar-info progress-bar-striped" +
            (this.state.submitFormProgress < 100 ? "active" : "")
          }
          role="progressbar"
          aria-valuenow={this.state.submitFormProgress}
          areaValuemin="0"
          areaValuemax="100"
          style={{ width: this.state.submitFormProgress + "%" }}
        >
          {this.state.submitFormProgress}
        </div>
      </div>
    );
  };

  buildFormData = () => {
    const formData = new FormData();

    formData.append("place[fileName]", this.state.place.image.name);
    formData.append("place[name]", this.state.place.name);
    formData.append("place[venue]", this.state.place.venue);
    formData.append("place[latitude]", this.state.place.latitude);
    formData.append("place[longitude]", this.state.place.longitude);
    formData.append("place[contactName]", this.state.place.contactName);
    formData.append("place[contactPhone]", this.state.place.contactPhone);
    formData.append("place[email]", this.state.place.email);
    // formData.append("place[permit]", this.state.place.permit);
    formData.append("place[description]", this.state.place.description);
    formData.append("place[GPSLatitudeRef]", this.state.place.GPSLatitudeRef);
    formData.append("place[GPSLongitudeRef]", this.state.place.GPSLongitudeRef);

    formData.append(this.state.place.image, this.state.place.image.name);
    return formData;
  };

  render() {
    if (
      this.state.place.fileName === "" ||
      this.state.place.fileName === undefined ||
      this.state.place.fileName === null
    ) {
      const place = this.state.place;
      place.latitude = "";
      place.longitude = "";
    } else {
      const place = this.state.place;
      place.latitude = this.props.fileLat;
      place.longitude = this.props.fileLong;
    }

    const { reset } = this.props;
    return (
      <div>
        <NavLink
          to={{
            pathname: "/places/all_contacts",
            places: { places: this.props.allPlaces }
          }}
        >
          <button className="button">See Contacts</button>
        </NavLink>

        <NavLink to="/places/visible_locations" exact>
          <button className="button">See locations</button>
        </NavLink>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="fileUpload">
              <div>
                <label>File Upload </label>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  disabled={this.state.isSubmittingForm}
                  onChange={this.handleFileSelect}
                />
              </div>
            </div>
            <div>
              <label>Lat/Long</label>
              <div>
                <Field
                  className="input"
                  name="lat"
                  component="input"
                  type="text"
                  placeholder={this.state.place.latitude}
                  onChange={this.handleChange}
                />
                <Field
                  className="input"
                  name="long"
                  component="input"
                  type="text"
                  placeholder={this.state.place.longitude}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <label>Location Name</label>
              <div>
                <Field
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <label>Description and Notes</label>
              <div>
                <Field
                  className="input"
                  name="description"
                  component="textarea"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={this.props.pristine}
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

const mapStateToProps = state => {
  return {
    fileLat: state.addLatReducer,
    fileLong: state.addLongReducer,
    places: state.getLocationsReducer,
    allPlaces: state.getAllLocationsReducer,
    center: state.setCenterReducer,
    bounds: state.setBoundsReducer
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
