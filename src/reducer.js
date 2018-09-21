import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import placesReducer from "./reducers/placesReducer";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const getLatReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAT":
      // debugger;
      return action.lat;

    default:
      return state;
  }
};

const getLongReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LONG":
      // debugger;
      return action.lng;

    default:
      return state;
  }
};

const addLatReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAT":
      return action.lat;

    default:
      return state;
  }
};

const addLongReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LONG":
      return action.lng;

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  // placesReducer,
  getLatReducer,
  getLongReducer,
  addLatReducer,
  addLongReducer,
  // fileUploadReducer,
  form: formReducer
};
const allReducers = combineReducers(reducers);
// const store = createStore(formReducer, ["Use Redux"]);

export default allReducers;
