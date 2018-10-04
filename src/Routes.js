import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import NewPlaceForm from "./containers/NewPlaceForm";
import EditPlaceForm from "./containers/EditPlaceForm";
import ShowPlace from "./components/ShowPlace";
import ListLocations from "./components/ListLocations";
import ListContacts from "./components/ListContacts";

const history = createBrowserHistory();
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={NewPlaceForm} />
      <Route exact path="/places/visible_locations" component={ListLocations} />
      <Route exact path="/places/all_contacts" component={ListContacts} />
      <Route path="/places/:id/edit" component={EditPlaceForm} />
      <Route path="/places/:id" component={ShowPlace} />
    </Switch>
  </Router>
);

export default Routes;
