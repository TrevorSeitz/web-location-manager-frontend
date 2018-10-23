import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LAT":
      lat = action.lat;
      return lat;

    case "ADD_LONG":
      lng = action.lng;
      return lng;

    case "SET_CENTER":
      center = action.center;
      return center;

    case "SET_BOUNDS":
      return [...state, action.bounds];

    case "GET_LOC":
      // debugger;
      return [...state, action.places];

    case "GET_ALL":
      // debugger;
      return [...state, action.allPlaces];

    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  mainReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
