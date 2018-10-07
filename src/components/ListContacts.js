import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink } from "react-router-dom";

let allContacts = [];
let contactList = [];

const ListAllContacts = props => {
  props.getAllLocations(null, -180, 180, -90, 90);

  let allPlaces = props.allPlaces.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return (
    <div className="contact-list">
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
          to="/places/visible_locations"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">See locations</button>
        </NavLink>
      </div>
      <div>
        <ul>
          {allPlaces.map(place => {
            return (
              <div className="contact-list" key={place.id}>
                <p>
                  {place.id}. Place: {place.name}
                </p>
                <p>Contact Name: {place.contactName}</p>
                <p>Contact Phone: {place.contactPhone}</p>
                <p>email: {place.email}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
  // }
};

const mapStateToProps = state => {
  return {
    allPlaces: state.getAllLocationsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListAllContacts);
