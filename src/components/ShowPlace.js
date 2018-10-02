// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, BrowserRouter, Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

const ShowPlace = props => {
  const place = props.history.location.state.place;

  function shorten(x) {
    return Number.parseFloat(x).toFixed(4);
  }

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
          <button className="tripleButton">Add Location</button>
        </NavLink>
        <NavLink
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="tripleButton">See Contacts</button>
        </NavLink>
        <NavLink
          to="/ListLocations"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="tripleButton">Back to locations</button>
        </NavLink>
      </div>
      <div key={place.id}>
        <p>Place: {place.name}</p>
        <p>
          Lat: {shorten(place.latitude)} Long: {shorten(place.longitude)}
        </p>
        <p>File Name: {place.fileName}</p>
        <p>Contact Name: {place.contactName}</p>
        <p>Contact Phone: {place.contactPhone}</p>
        <p>email: {place.email}</p>
        <p>image: </p>
        <img
          src={require("../assets/images/IMG_0774.jpg")}
          width="250"
          alt=""
        />
      </div>
      <div className="navbar">
        <Link
          to={{
            pathname: `/Edit/${place.id}`,
            state: { place: place },
            query: { id: place.id }
          }}
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">Edit</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    allPlaces: state.getLocationsReducer
  };
};

export default connect()(ShowPlace);
