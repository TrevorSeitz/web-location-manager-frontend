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

const setCenterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CENTER":
      return action.center;

    default:
      return state;
  }
};

const setBoundsReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_BOUNDS":
      return action.bounds;

    default:
      return state;
  }
};

const getLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOC":
      return action.payload;

    default:
      return state;
  }
};

const getAllLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;

    default:
      return state;
  }
};

const delPlaceReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  setCenterReducer,
  setBoundsReducer,
  delPlaceReducer,
  getAllLocationsReducer,
  getLocationsReducer,
  addLatReducer,
  addLongReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
