import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import allReducers from "../reducer";
import { NavLink } from "react-router-dom";
import * as ActiveStorage from "activestorage";

let allContacts = [];
let contactList = [];

class ListAllContacts extends Component {
  constructor(props) {
    super(props);
    this.state = { allPlaces: [] };

    this.FetchAllContactsFromAPI = this.FetchAllContactsFromAPI.bind(this);
    // this.ContactListBuilder = this.ContactListBuilder.bind(this);
    let allContacts = [];
    // let allPlaces = this.state.allPlaces;
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
    // debugger;
    // if (this.state.allPlaces !== []) {
    //   this.ContactListBuilder();
    // }
  }

  componentDidMount() {
    this.FetchAllContactsFromAPI();
    // debugger;
  }

  // ContactListBuilder() {
  //   // debugger;
  //   // this.FetchAllContactsFromAPI();
  //   // if (allContacts.length > 0 && allContacts !== [])
  //   {
  //     contactList = (
  //       <ul>
  //         {this.state.allPlaces.map(place => {
  //           return (
  //             <div key={place.id}>
  //               <p>Place: {place.name}</p>
  //               <p>Contact Name: {place.contactName}</p>
  //               <p>Contact Phone: {place.contactPhone}</p>
  //               <p>email: {place.email}</p>
  //             </div>
  //           );
  //         })}
  //       </ul>
  //     );
  //   }
  // }
  //   </div>
  // );

  render() {
    // // debugger;
    // this.FetchAllContactsFromAPI();
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
    {
      //     /*<div className="contactName">
      //   {props.places.length > 0 &&
      //     props.places.map(place => (
      //
      //         name={place.name}
      //         description={place.description}
      //         contactName={place.contactName}
      //         contactPhone={place.contactPhone}
      //         email={place.email}
      //            ))}
      // </div>;*/
    }
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
