import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, Link } from "react-router-dom";
import IMG_0774 from "../assets/images/IMG_0774.jpg";

const ListLocations = props => {
  props.getLocations(
    null,
    props.bounds[0],
    props.bounds[1],
    props.bounds[2],
    props.bounds[3]
  );

  let places = props.places.sort(function(a, b) {
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
          to="/places/all_contacts"
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
          {places.map(place => {
            return (
              <div key={place.id}>
                <Link
                  to={{
                    pathname: `Place/${place.id}`,
                    state: { place: place },
                    query: { id: place.id }
                  }}
                >
                  <p>
                    {place.id}. Place: {place.name}
                  </p>
                </Link>
                <p>Contact Name: {place.contactName}</p>
                <p>Contact Phone: {place.contactPhone}</p>
                <p>email: {place.email}</p>
                <p>image: {place.image}</p>
                <img
                  src={require("../assets/images/IMG_0774.jpg")}
                  width="250"
                  alt=""
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    places: state.getLocationsReducer,
    bounds: state.setBoundsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListLocations);
