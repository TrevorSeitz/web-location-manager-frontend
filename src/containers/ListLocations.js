import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, Link } from "react-router-dom";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: props.places
    };
  }

  handleLikes = e => {
    e.preventDefault();
    debugger;
  };

  render() {
    const places = this.props.places.slice().sort(function(a, b) {
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
                  {/*<p>
                    Likes: {place.likes}
                    <button type="button" onClick={this.handleLikes()}>
                      Like
                    </button>
                  </p>*/}
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
