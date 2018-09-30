import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import NewPlaceForm from "./containers/NewPlaceForm";
import ListLocations from "./components/ListLocations";
import ListContacts from "./containers/ListContacts";

// import BookIndex from "./Book/Index";
// import BookNew from "./Book/New";
// import BookEdit from "./Book/Edit";
// import NotFound from "./NotFound";

const history = createBrowserHistory();
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" container={NewPlaceForm} />
      <Route exact path="/ListLocations" component={ListLocations} />
      <Route exact path="/ListContacts" component={ListContacts} />
    </Switch>
  </Router>
);

export default Routes;

// export class NavBar extends Component {
//   /* add the navbar component */
//   render() {
//     return (
//       <div>
//         <NavLink
//           to="/"
//           exact
//           style={link}
//           activeStyle={{
//             background: "darkblue"
//           }}
//         >
//           NewPlace
//         </NavLink>
//         <NavLink
//           to="/NewPlaceForm"
//           exact
//           style={link}
//           activeStyle={{
//             background: "darkblue"
//           }}
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/ListContacts"
//           exact
//           style={link}
//           activeStyle={{
//             background: "darkblue"
//           }}
//         >
//           Login
//         </NavLink>
//         <Router>
//           <Switch>
//             <Route exact path="/" component={NewPlaceForm} />
//             <Route exact path="/ListLocations" component={ListLocations} />
//             <Route exact path="/ListContacts" component={ListContacts} />
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }
