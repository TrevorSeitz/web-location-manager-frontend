import React from "react";
import { connect } from "react-redux";
import { NavLink, BrowserRouter, Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

// place GET    /api/places/:id
// debugger;
const ShowPlace = props => {
  var place = props.place;

  debugger;
  let id = place.id;
  let image = place.image;
  let fileName = place.fileName;
  let mapLat = place.mapLat;
  let mapLong = place.mapLong;
  let lat = place.lat;
  let lng = place.lng;
  let latRef = place.latRef;
  let lngRef = place.lngRef;
  image.name = fileName;

  return (
    <div>
      <div className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">Add Location</button>
        </NavLink>
        <NavLink
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">See Contacts</button>
        </NavLink>
      </div>
      <div className="locations">
        <ul>
          {this.props.places.map(place => {
            return (
              <div key={props.place.id}>
                <p>Place: {props.place.name}</p>
                <p>
                  Lat: {lat} Long: {lng}
                </p>
                <p>File Name: {fileName}</p>
                <p>Contact Name: {place.contactName}</p>
                <p>Contact Phone: {place.contactPhone}</p>
                <p>email: {place.email}</p>
                <p>image: </p>
                <img
                  src={require("../assets/images/IMG_0774.jpg")}
                  width="250"
                  alt=""
                />
                {/*<img src={require("")} width="250" alt="" />*/}
              </div>
            );
          })}
        </ul>
        {/*<button
          type="submit"
          // disabled={pristine || submitting}
          onClick={handleSubmit()}
        >*/}
        <button tag={Link} to="/EditPlaceForm">
          Edit This Location
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(ShowPlace);
