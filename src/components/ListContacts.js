import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import allReducers from "../reducer";
import { NavLink } from "react-router-dom";

const ListContacts = props => {
  // function getLocations() {
  //   places: props.getVisibleLocations;
  // }
  // getLocations();
  // console.log(props.getVisibleLocations);
  // // console.log(state);
  // let help = "help";
  // debugger;
  return (
    // <p>{help}</p>;
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
  );

  {
    /*<div className="contactName">
    {props.places.length > 0 &&
      props.places.map(place => (

          name={place.name}
          description={place.description}
          contactName={place.contactName}
          contactPhone={place.contactPhone}
          email={place.email}
             ))}
  </div>;*/
  }
};

const mapStateToProps = state => {
  return;
  {
    test: state;
  }
};
export default connect(
  null,
  actions
)(ListContacts);
