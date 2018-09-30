import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NewPlaceForm from "../containers/NewPlaceForm";
import ListLocations from "../containers/ListLocations";
import ListContacts from "../containers/ListContacts";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

/* Add basic styling for NavLinks */
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = props => {
  /* add the navbar component */

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        NewPlace
      </NavLink>
      <NavLink
        to="/NewPlaceForm"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/ListContacts"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Login
      </NavLink>
      <Router>
        <Switch>
          <Route exact path="/" component={NewPlaceForm} />
          <Route exact path="/ListLocations" component={ListLocations} />
          <Route exact path="/ListContacts" component={ListContacts} />
        </Switch>
      </Router>}
    </div>
  );
};
// const NewPlace = () => <h1>Add a New Place</h1>;
//
// const ListLocations = () => <h1>List Locations on the Map</h1>;
//
// const ListContacts = () => <h1>List Contacts of all Locations</h1>;

// ReactDOM.render(
//   <Router>
//     <React.Fragment>
//       <NavBar />
//       <Route exact path="/" component={NewPlaceForm} />
//       <Route exact path="/ListLocations" component={ListLocations} />
//       <Route exact path="/ListContacts" component={ListContacts} />
//     </React.Fragment>
//   </Router>,
//   document.getElementById("root")
// );

export default NavBar;

// <button type="button" disabled={pristine || submitting} onClick={reset}>
// <Button color="primary" className="px-4"
//                       onClick={this.routeChange}
//                         >
//                         List Contacts
//                       </Button>
