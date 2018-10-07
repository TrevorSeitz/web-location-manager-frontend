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

const getLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOC":
      // debugger;
      return action.payload;

    default:
      return state;
  }
};

const getAllLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      // debugger;
      return action.payload;

    default:
      return state;
  }
};

const delPlaceReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return state.filter(({ id }) => id !== action.data);

    default:
      return state;
  }
};

const reducers = {
  // ... your other reducers here ...
  delPlaceReducer,
  getAllLocationsReducer,
  getLocationsReducer,
  addLatReducer,
  addLongReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
