import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { addLatReducer, addLongReducer } from "./reducers/latLngReducers";
import { setBoundsReducer, setCenterReducer } from "./reducers/mapReducers";
import {
  getLocationsReducer,
  getAllLocationsReducer,
  delPlaceReducer
} from "./reducers/locationReducers";

const reducers = {
  // ... your other reducers here ...
  setCenterReducer,
  setBoundsReducer,
  // mapReducer,
  getLocationsReducer,
  getAllLocationsReducer,
  delPlaceReducer,
  addLatReducer,
  addLongReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
