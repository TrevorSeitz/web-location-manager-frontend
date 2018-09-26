import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

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

const getVisibleLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOC":
      debugger;
      return action.payload;

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  getVisibleLocationsReducer,
  addLatReducer,
  addLongReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
