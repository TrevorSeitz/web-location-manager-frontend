import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import { PlaceMarker } from "../components/PlaceMarker";
import { App } from "../App";

export class ListLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      hello: "hello"
    };
  }

  getLocations() {
    // debugger;
    this.props.getVisibleLocations;
  }

  render() {
    return (
      <div className="place">
        {this.props.places.length > 0 &&
          this.props.places.map(place => (
            <PlaceMarker
              key={`place${place.id}`}
              id={place.id}
              lat={place.latitude}
              lng={place.longitude}
              description={place.description}
              contactName={place.contactName}
              contactPhone={place.contactPhone}
              email={place.email}
              name={place.name}
            />
          ))}
      </div>
    );
    // debugger;
    // <div>{(this, state.places.map(place => <p> {place.name} </p>))}</div>
    // );
  }
}

// props.places.map(place => (
// <div>
//   <h3>{places.name} </h3>
//   <p>{places.contactName} </p>
//   <p>{places.contactPhone} </p>
//   <p>{places.email} </p>
// </div>)

export default connect(
  null,
  actions
)(ListLocations);

// export default ListLocations;
