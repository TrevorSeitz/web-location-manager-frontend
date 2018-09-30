import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import { PlaceMarker } from "./PlaceMarker";
import { App } from "../App";
import { NavLink } from "react-router-dom";

const ListLocations = props => {
  debugger;
  function getLocations() {
    places: props.places;
  }

  // render() {
  getLocations();
  debugger;
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
          Add Location
        </NavLink>
        <NavLink
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          See Contacts
        </NavLink>
      </div>
      <div className="place">
        {props.places.length > 0 &&
          props.places.map(place => (
            <PlaceMarker
              key={`place${place.id}`}
              id={place.id}
              lat={place.latitude}
              lng={place.longitude}
              description={place.description}
              contactName={place.contactName}
              contactPhone={place.contactPhone}
              email={place.email}
              name={place.name}
            />
          ))}
      </div>
    </div>
  );
  // debugger;
  // <div>{(this, state.places.map(place => <p> {place.name} </p>))}</div>
  // );
  // }
};

// props.places.map(place => (
// <div>
//   <h3>{places.name} </h3>
//   <p>{places.contactName} </p>
//   <p>{places.contactPhone} </p>
//   <p>{places.email} </p>
// </div>)

export default connect(
  null,
  actions
)(ListLocations);

// export default ListLocations;
