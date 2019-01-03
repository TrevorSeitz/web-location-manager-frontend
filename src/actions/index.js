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
  return {
    type: "SET_BOUNDS",
    bounds: bounds
  };
};

export const setCenter = (centerLat, centerLng) => {
  let center = { centerLat, centerLng };
  return {
    type: "SET_CENTER",
    center: center
  };
};

export const delPlace = (id, history) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    fetch(`http://localhost:4000/api/places/${id}`, {
      method: "DELETE"
    }).then(history.push("/"));
  };
};

export const getLocations = (dispatch, min_lng, max_lng, min_lat, max_lat) => {
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
      .then(jsonData => dispatch({ type: "GET_LOC", places: jsonData }));
  };
};

export const getAllLocations = dispatch => {
  // debugger;
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    fetch(
      `http://localhost:4000/api/places?min_lng=-180&max_lng=180&min_lat=-90&max_lat=90`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(jsonData => dispatch({ type: "GET_ALL", allPlaces: jsonData }));
  };
};
