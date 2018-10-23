import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { latLngReducer } from "./reducers/latLngReducer";
import { mapReducer } from "./reducers/mapReducer";
import { getLocationsReducer } from "./reducers/locationReducer";

const reducers = {
  // ... your other reducers here ...
  latLngReducer,
  mapReducer,
  getLocationsReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
