import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink } from "react-router-dom";

let allContacts = [];
let contactList = [];

class ListAllContacts extends Component {
  constructor(props) {
    super(props);
    this.state = { allPlaces: [] };

    this.FetchAllContactsFromAPI = this.FetchAllContactsFromAPI.bind(this);
  }

  FetchAllContactsFromAPI() {
    // debugger;
    // this.props.getLocations(null, -180, 180, -90, 90);

    fetch(`/api/places?min_lng=-180&max_lng=180&min_lat=-90&max_lat=90`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => this.setState({ allPlaces: response }));

    allContacts = this.state.allPlaces;
  }

  componentDidMount() {
    this.FetchAllContactsFromAPI();
  }

  render() {
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
            Add Location
          </NavLink>
          <NavLink
            to="/ListLocations"
            exact
            activeStyle={{
              background: "darkblue"
            }}
          >
            See locations
          </NavLink>
        </div>
        <div className="contact-list">
          <ul>
            {this.state.allPlaces.map(place => {
              return (
                <div key={place.id}>
                  <p>Place: {place.name}</p>
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
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    allPlaces: state.getLocationsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListAllContacts);
