import React from "react";
import { NavLink, Link } from "react-router-dom";

const ShowPlace = props => {
  const place = props.location.state.place;
  const places = props.location.state.places;

  function shorten(x) {
    return Number.parseFloat(x).toFixed(4);
  }

  // if (place.id !== undefined) {
  //   var button = <button className="button">Edit</button>;
  // } else {
  //   button = "";
  // }
  const button =
    place.id === undefined ? "" : <button className="button">Edit</button>;
  return (
    <div>
      <div className="navbar">
        <NavLink to="/" exact>
          <button className="tripleButton">Add Location</button>
        </NavLink>
        <NavLink
          to={{
            pathname: "/places/all_contacts",
            allPlaces: { allPlaces: this.props.allPlaces }
          }}
        >
          <button className="button">See Contacts</button>
        </NavLink>
        <NavLink
          to={{
            pathname: "/places/visible_locations",
            places: { places: props.places }
          }}
          exact
        >
          <button className="tripleButton">See locations</button>
        </NavLink>
      </div>
      <div key={place.id}>
        <p>
          {place.id} Place: {place.name}
        </p>
        <p>
          Lat: {shorten(place.latitude)} Long: {shorten(place.longitude)}
        </p>
        <p>File Name: {place.fileName}</p>
        <p>Venue: {place.venue}</p>
        <p>Contact Name: {place.contactName}</p>
        <p>Contact Phone: {place.contactPhone}</p>
        <p>email: {place.email}</p>
        {/*<p>image: </p>
        <img
          src={require("../assets/images/IMG_0774.jpg")}
          width="250"
          alt=""
        />*/}
      </div>

      <div className="navbar">
        <Link
          to={{
            pathname: `/places/${place.id}/edit`,
            state: { place: place },
            query: { id: place.id }
          }}
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default ShowPlace;
