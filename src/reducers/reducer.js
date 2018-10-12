import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { addLatReducer, addLongReducer } from "./latLngReducer";
import mapReducer from "./mapReducer";
import {
  getLocationsReducer,
  getAllLocationsReducer,
  delPlaceReducer
} from "./locationReducer";

const reducers = {
  // ... your other reducers here ...
  // setCenterReducer,
  // setBoundsReducer,
  mapReducer,
  getLocationsReducer,
  getAllLocationsReducer,
  delPlaceReducer,
  addLatReducer,
  addLongReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
