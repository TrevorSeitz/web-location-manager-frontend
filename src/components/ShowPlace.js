// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, BrowserRouter, Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

const ShowPlace = props => {
  const place = props.history.location.state.place;

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
          to="/ListContacts"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">See Contacts</button>
        </NavLink>
      </div>
      <div key={place.id}>
        <p>Place: {place.name}</p>
        <p>
          Lat: {place.lat} Long: {place.lng}
        </p>
        <p>File Name: {place.fileName}</p>
        <p>Contact Name: {place.contactName}</p>
        <p>Contact Phone: {place.contactPhone}</p>
        <p>email: {place.email}</p>
        <p>image: </p>
        <img
          src={require("../assets/images/IMG_0774.jpg")}
          width="250"
          alt=""
        />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     place: state.getLocationReducer
//   };
// };

export default connect()(ShowPlace);
// mapStateToProps,
// actions

//
// <ul>
//   {this.props.places.map(place => {
//     return (

// this.props.history.location.state.place.name;

//       <div key={props.place.id}>
//         <p>Place: {props.place.name}</p>
//         <p>
//           Lat: {lat} Long: {lng}
//         </p>
//         <p>File Name: {fileName}</p>
//         <p>Contact Name: {place.contactName}</p>
//         <p>Contact Phone: {place.contactPhone}</p>
//         <p>email: {place.email}</p>
//         <p>image: </p>
//         <img
//           src={require("../assets/images/IMG_0774.jpg")}
//           width="250"
//           alt=""
//         />
//         {/*<img src={require("")} width="250" alt="" />*/}
//       </div>
//     );
//   })}
// </ul>

// <div className="locations">
//   {/*<button
//     type="submit"
//     // disabled={pristine || submitting}
//     onClick={handleSubmit()}
//   >*/}
//   <button tag={Link} to="/EditPlaceForm">
//     Edit This Location
//   </button>
// </div>
