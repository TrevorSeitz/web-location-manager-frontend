import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, Link } from "react-router-dom";
import LikesButton from "../components/LikesButton";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.places
    };
  }

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

    return (
      <div>
        <div className="navbar">
          <NavLink to="/" exact>
            <button className="button">Add Location</button>
          </NavLink>
          <NavLink
            to={{
              pathname: "/places/all_contacts",
              allPlaces: { allPlaces: this.props.allPlaces }
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
                      state: {
                        place: place,
                        places: this.state.places,
                        allPlaces: this.props.allPlaces
                      },
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
                  <LikesButton
                    place={place}
                    getLocations={this.props.getLocations}
                    updateLikes={this.updateLikes}
                    bounds={this.props.bounds}
                  />

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
    center: state.mapReducer.center,
    bounds: state.mapReducer.bounds,
    places: state.getLocationsReducer.places,
    allPlaces: state.getLocationsReducer.allPlaces
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListLocations);
