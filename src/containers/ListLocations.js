import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import { PlaceMarker } from "../components/PlaceMarker";
import { App } from "../App";
import { NavLink } from "react-router-dom";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    // this.state = { places: [] };
  }
  debugger;

  // getLocations() {
  //   places: props.places;
  // }

  render() {
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
        <div className="locations">
          <ul>
            {this.props.places.map(place => {
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
  // debugger;
  // <div>{(this, state.places.map(place => <p> {place.name} </p>))}</div>
  // );
  // }
}

// props.places.map(place => (
// <div>
//   <h3>{places.name} </h3>
//   <p>{places.contactName} </p>
//   <p>{places.contactPhone} </p>
//   <p>{places.email} </p>
// </div>)

const mapStateToProps = state => {
  // console.log(state);
  return {
    places: state.getLocationsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListLocations);

// export default ListLocations;
