import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import placesReducer from "./reducers/placesReducer";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const reducers = {
  // ... your other reducers here ...
  placesReducer,
  form: formReducer
};
const allReducers = combineReducers(reducers);
// const store = createStore(formReducer, ["Use Redux"]);

export default allReducers;
