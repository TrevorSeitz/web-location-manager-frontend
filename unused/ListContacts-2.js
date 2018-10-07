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
    this.props.getAllLocations(null, -180, 180, -90, 90);
  }

  componentDidMount() {
    this.FetchAllContactsFromAPI();
  }

  render() {
    allContacts = this.props.allPlaces;
    // debugger;
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
            {this.props.allPlaces.map(place => {
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
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    allPlaces: state.getAllLocationsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListAllContacts);
