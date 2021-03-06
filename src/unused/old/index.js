import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import mapReducer from "./mapReducer";
import newPlaceReducer from "./newPlaceReducer";
import locationReducer from "./locationReducer";

const reducers = {
  mapReducer: mapReducer,
  newPlaceReducer: newPlaceReducer,
  locationReducer: locationReducer,
  form: formReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
