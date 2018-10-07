import { browserHistory } from "react-router-dom";

export const addLat = mapLat => {
  return {
    type: "ADD_LAT",
    lat: mapLat
  };
};

export const addLong = mapLong => {
  return {
    type: "ADD_LONG",
    lng: mapLong
  };
};

export const setBounds = bounds => {
  // let center = [centerLat, centerLng];
  debugger;
  return {
    type: "SET_BOUNDS",
    bounds: bounds
  };
};

export const setCenter = (centerLat, centerLng) => {
  let center = [centerLat, centerLng];
  return {
    type: "SET_CENTER",
    center: center
  };
};

export const delPlace = (id, history) => {
  return dispatch => {
    debugger;
    dispatch({ type: "ASYNC_START" });
    fetch(`http://localhost:4000/api/places/${id}`, {
      method: "DELETE"
    })
      // .then(getAllLocations(null, -180, 180, -90, 90))
      .then(history.push("/places/visible_locations"));

    // .then()
    // .then(
    //   // response => dispatch({ type: "DELETE_PLACE", id: id }),
    //   history.push("/places/visible_locations")
    // );
  };
};

export const getLocations = (dispatch, min_lng, max_lng, min_lat, max_lat) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    debugger;

    fetch(
      `http://localhost:4000/api/places?min_lng=${min_lng}&max_lng=${max_lng}&min_lat=${min_lat}&max_lat=${max_lat}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(jsonData => dispatch({ type: "GET_LOC", payload: jsonData }));
  };
};

export const getAllLocations = (
  dispatch,
  min_lng,
  max_lng,
  min_lat,
  max_lat
) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    fetch(
      `http://localhost:4000/api/places?min_lng=${min_lng}&max_lng=${max_lng}&min_lat=${min_lat}&max_lat=${max_lat}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(jsonData => dispatch({ type: "GET_ALL", payload: jsonData }));
  };
};
// };
