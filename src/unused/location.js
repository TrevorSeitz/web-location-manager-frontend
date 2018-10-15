export const delPlace = (id, history) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    fetch(`http://localhost:4000/api/places/${id}`, {
      method: "DELETE"
    })
      .then(dispatch({ type: "DELETE_PLACE", id: id }))
      .then(history.push("/"));
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
