import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import axiosClient from "../axiosClient";
import { NavLink, Link } from "react-router-dom";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: props.history.location.state.places
    };
  }

  handleLikes = place => {
    place.likes += 1;
    debugger;
    const id = place.id;
    const submitMethod = "patch";
    const url = `/api/places/${id}`;
    console.log(place.likes);
    // debugger;
    axiosClient[submitMethod](url, place).then(response => {
      this.props.getLocations(
        null,
        this.props.bounds[0],
        this.props.bounds[1],
        this.props.bounds[2],
        this.props.bounds[3]
      );
    });
  };

  render() {
    const places = this.state.places.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    // debugger;
    return (
      <div>
        <div className="navbar">
          <NavLink to="/" exact>
            <button className="button">Add Location</button>
          </NavLink>
          <NavLink
            to={{
              pathname: "/places/all_contacts",
              places: { places: this.props.allPlaces }
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
                      state: { place: place, places: this.props.allPlaces },
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
                  <p>Description: {place.description}</p>
                  <p>Likes: {place.likes}</p>
                  <button
                    type="button"
                    onClick={this.handleLikes.bind(this, place)}
                  >
                    Like
                  </button>

                  {/*<p>image: {place.image}</p>
                <img
                  src={require("../assets/images/IMG_0774.jpg")}
                  width="250"
                  alt=""
                />*/}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.getLocationsReducer,
    bounds: state.setBoundsReducer,
    allPlaces: state.getAllLocationsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListLocations);
