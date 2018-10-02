import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import submit from "../submit";
import axiosClient from "../axiosClient";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import * as ActiveStorage from "activestorage";
import { NavLink } from "react-router-dom";

class EditPlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: props.history.location.state.place
    };

    debugger;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.renderUploadFormProgress = this.renderUploadFormProgress.bind(this);
    this.buildFormData = this.buildFormData.bind(this);

    ActiveStorage.start();
  }

  handleFileSelect(e) {
    let image = e.target.files[0];
    var place = this.state.place;
    place.image = image;
    place.fileName = image.name;
    let mapLat = place.mapLat;
    let mapLong = place.mapLong;
    let lat = place.lat;
    let lng = place.lng;
    let latRef = place.latRef;
    let lngRef = place.lngRef;
    let fileName = place.fileName;
    let that = this;

    function setProps(mapLat, mapLong, latRef, lngRef) {
      that.props.addLat(mapLat);
      that.props.addLong(mapLong);
      //
      var place = that.state.place;
      place.latitude = that.props.fileLat;
      place.longitude = that.props.fileLong;
      place.GPSLatitudeRef = latRef;
      place.GPSLongitudeRef = lngRef;

      // that.setState.place({ latitude: that.props.fileLat });
      // that.setState.place({ longitude: that.props.fileLong });
      // that.setState.place({ GPSLatitudeRef: latRef });
      // that.setState.place({ GPSLongitudeRef: lngRef });
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
    var place = this.state.place;
    place[e.target.name] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    var place = this.state.place;
    this.setState(
      {
        isSubmittingForm: true,
        place: place
      },
      () => {
        this.submitForm();
      }
    );
  }

  submitForm() {
    let submitMethod = "patch";
    let url = "/api/places/{this.props.place.id}";
    axiosClient[submitMethod](url, this.buildFormData(), {
      onUploadProgress: progressEvent => {
        let percentage = (progressEvent.loaded * 100.0) / progressEvent.total;
        this.setState({
          submitFormProgress: percentage
        });
      }
    })
      .then(response => {
        this.setState({
          didFormSubmissionComplete: true
        });
        this.props.histpry.push("/places");
      })
      .catch(error => {
        var place = this.state.place;
        // place.errors = error.response.data;
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          place: place
        });
      });
  }

  renderUploadFormProgress() {
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
          {this.state.submitFormProgress}%autoComplete
        </div>
      </div>
    );
  }

  buildFormData() {
    let formData = new FormData();
    formData.append("place[fileName]", this.state.place.image.name);
    formData.append("place[name]", this.state.place.name);
    formData.append("place[venue]", this.state.place.venue);
    formData.append("place[latitude]", this.state.place.latitude);
    formData.append("place[longitude]", this.state.place.longitude);
    formData.append("place[contactName]", this.state.place.contactName);
    formData.append("place[contactPhone]", this.state.place.contactPhone);
    formData.append("place[email]", this.state.place.email);
    formData.append("place[permit]", this.state.place.permit);
    formData.append("place[description]", this.state.place.description);
    formData.append("place[GPSLatitudeRef]", this.state.place.GPSLatitudeRef);
    formData.append("place[GPSLongitudeRef]", this.state.place.GPSLongitudeRef);

    formData.append(this.state.place.image, this.state.place.image.name);

    return formData;
  }

  render() {
    const { reset } = this.props;
    const place = this.state.place;
    return (
      <div>
        <NavLink
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">All Contacts</button>
        </NavLink>
        <NavLink
          to="/ListLocations"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">See Locations</button>
        </NavLink>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Location Name</label>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder={place.name}
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
                  placeholder={place.venue}
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
                  placeholder={place.contactName}
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
                  placeholder={place.contactPhone}
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
                  placeholder={place.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <label>Description and Notes</label>
              <div>
                <Field
                  name="description"
                  component="textarea"
                  placeholder={place.description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
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
  })(EditPlaceForm)
);
