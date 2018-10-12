import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import NewPlaceForm from "./containers/NewPlaceForm";
import EditPlaceForm from "./containers/EditPlaceForm";
import ShowPlace from "./components/ShowPlace";
import ListLocations from "./containers/ListLocations";
import ListContacts from "./components/ListContacts";
import ListContactsByID from "./components/ListContactsByID";

const history = createBrowserHistory();
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={NewPlaceForm} />
      <Route exact path="/places/visible_locations" component={ListLocations} />
      <Route exact path="/places/all_contacts" component={ListContacts} />
      <Route exact path="/places/contacts_by_id" component={ListContactsByID} />
      <Route path="/places/:id/edit" component={EditPlaceForm} />
      <Route path="/places/:id" component={ShowPlace} />
    </Switch>
  </Router>
);

export default Routes;
