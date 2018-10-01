import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, BrowserRouter, Route, Link } from "react-router-dom";
import * as ActiveStorage from "activestorage";
import IMG_0774 from "../assets/images/IMG_0774.jpg";

class ListLocations extends Component {
  constructor(props) {
    super(props);
    // this.state = { places: [] };

    ActiveStorage.start();
  }

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
                  <Link
                    to={{
                      pathname: `place/${place.id}`,
                      query: { id: place.id }
                    }}
                  >
                    <p>Place: {place.name}</p>
                  </Link>
                  <p>Contact Name: {place.contactName}</p>
                  <p>Contact Phone: {place.contactPhone}</p>
                  <p>email: {place.email}</p>
                  <p>image: {place.image}</p>
                  <img
                    src={require("../assets/images/IMG_0774.jpg")}
                    width="250"
                    alt=""
                  />
                  {/*<img src={require("")} width="250" alt="" />*/}
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
