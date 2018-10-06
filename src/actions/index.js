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

export const delPlace = (id, history) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    fetch(`http://localhost:4000/api/places/${id}`, {
      method: "DELETE"
    }).then(
      response => dispatch({ type: "DELETE_COMMENT", id: id }),
      history.replace("/places/visible_locations")
    );
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json"
    // }
    // }).then(response => {
    //   this.props.history.push("/places/visible_locations");
    // });
    // .then(response => dispatch({ type: "DELETE_COMMENT", id: id }));
  };
};

// export const deleteQuestion = (questionId, routerHistory) => {
//   return fetch(`${API_URL}/questions/${questionId}`, {
//     method: "DELETE"
//   })
//     .then(response => {
//       dispatch(removeQuestion(questionId));
//       routerHistory.replace(`/`);
//     })
//     .catch(error => console.log(error));
// };

export const getLocations = (dispatch, min_lng, max_lng, min_lat, max_lat) => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    // debugger;

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
