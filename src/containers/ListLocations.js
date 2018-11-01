import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, Link } from "react-router-dom";
import LikesButton from "../components/LikesButton";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.location.state.places
    };
  }

  sortLikesAscending = () => {
    const places = this.state.places.slice().sort((a, b) => a.likes - b.likes);
    this.setState({ places });
  };

  render() {
    // const places = this.state.places;
    debugger;
    return (
      <div class="row">
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
            <button className="tripleButton">See Contacts</button>
          </NavLink>
          <button className="tripleButton" onClick={this.sortLikesAscending}>
            Sort Likes Asc
          </button>
        </div>
        <div className="locations">
          <ul>
            {this.state.places.map(place => {
              return (
                <div key={place.id}>
                  <Link
                    to={{
                      pathname: `Place/${place.id}`,
                      state: {
                        place: place,
                        places: this.props.places,
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
