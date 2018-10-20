import React, { Component } from "react";
import axiosClient from "../axiosClient";

const SubmitEdit = props => {
  debugger;
  const submitMethod = "patch";
  const url = `/api/places/${props.place.id}`;
  axiosClient[submitMethod](url, props.place).then(response => {
    return props.getLocations(
      null,
      props.bounds[0],
      props.bounds[1],
      props.bounds[2],
      props.bounds[3]
    );
  });
};
