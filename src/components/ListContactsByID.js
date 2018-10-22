import React from "react";
import { NavLink } from "react-router-dom";

const ListAllContacts = props => {
  const allPlaces = props.location.allPlaces.allPlaces
    .slice()
    .sort(function(a, b) {
      const idA = a.id; // ignore upper and lowercase
      const idB = b.id; // ignore upper and lowercase
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

  return (
    <div className="contact-list">
      <div className="navbar">
        <NavLink to="/" exact>
          <button className="button">Add Location</button>
        </NavLink>
        <NavLink
          to={{
            pathname: "/places/visible_locations"
          }}
          exact
        >
          <button className="button">See locations</button>
        </NavLink>
      </div>

      <div>
        <NavLink
          to={{
            pathname: "/places/all_contacts",
            allPlaces: { allPlaces: this.props.allPlaces }
          }}
        >
          <button className="button">Order Contacts by Location</button>
        </NavLink>
      </div>
      <div>
        <ul>
          {allPlaces.map(place => {
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
};

export default ListAllContacts;
