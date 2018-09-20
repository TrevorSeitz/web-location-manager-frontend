import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import placesReducer from "./reducers/placesReducer";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const latReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAT":
      debugger;
      return action.lat;

    default:
      return state;
  }
};

const longReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LONG":
      // debugger;
      return action.long;

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  // placesReducer,
  latReducer,
  longReducer,
  // fileUploadReducer,
  form: formReducer
};
const allReducers = combineReducers(reducers);
// const store = createStore(formReducer, ["Use Redux"]);

export default allReducers;
