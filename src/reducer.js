import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const mainReducer = (
  state = {
    lat: "",
    lng: "",
    center: "",
    bounds: "",
    places: [],
    allPlaces: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_LAT":
      return action.lat;

    case "ADD_LONG":
      return action.lng;

    case "SET_CENTER":
      return action.center;

    case "SET_BOUNDS":
      return action.bounds;

    case "GET_LOC":
      return action.places;

    case "GET_ALL":
      return action.allPlaces;

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
