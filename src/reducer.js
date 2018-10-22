import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { LatLngReducer } from "./reducers/latLngReducers";
import { mapReducer } from "./reducers/mapReducers";
import { getLocationsReducer } from "./reducers/locationReducers";

const reducers = {
  // ... your other reducers here ...
  LatLngReducer,
  mapReducer,
  getLocationsReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
