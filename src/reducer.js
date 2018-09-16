import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import locationReducer from "./reducers/locationsReducer";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const reducers = {
  // ... your other reducers here ...
  locationReducer,
  form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(formReducer, ["Use Redux"]);

export default reducer;
