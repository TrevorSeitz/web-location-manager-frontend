import React, { Component } from "react";
import * as EXIF from "exif-js";
import * as actions from "../actions";
import { connect } from "react-redux";

function HandleFileSelectFunction(e, props) {
  // e.persist();
  console.log(e);
  console.log(props);
  // console.log(props.target.files[0]);

  // console.log(place);
  debugger;
  const image = e.target.files[0];
  // const place = props.place;
  // place.image = image;
  const fileName = image.name;

  let mapLat = "";
  let mapLong = "";
  let lat = "";
  let lng = "";
  let latRef = "";
  let lngRef = "";

  // first function to be hit when handleFileSelect is called
  EXIF.getData(image, function() {
    let lat = EXIF.getTag(image, "GPSLatitude");
    let lng = EXIF.getTag(image, "GPSLongitude");
    let latRef = EXIF.getTag(image, "GPSLatitudeRef");
    let lngRef = EXIF.getTag(image, "GPSLongitudeRef");

    makeReadable(lat, lng, latRef, lngRef);
  });

  function makeReadable(lat, lng, latRef, lngRef) {
    let mapLat = parseFloat(
      lat[0]["numerator"] +
        lat[1]["numerator"] / 60 +
        lat[2]["numerator"] / 360000
    ).toFixed(4);

    if (latRef === "S") {
      mapLat = -1 * mapLat;
    } else {
      mapLat = 1 * mapLat;
    }

    let mapLong = parseFloat(
      lng[0]["numerator"] +
        lng[1]["numerator"] / 60 +
        lng[2]["numerator"] / 360000
    ).toFixed(4);

    if (lngRef === "W") {
      mapLong = -1 * mapLong;
    } else {
      mapLong = 1 * mapLong;
    }

    setProps(mapLat, mapLong, latRef, lngRef);
  }

  function setProps(mapLat, mapLong, latRef, lngRef) {
    props.addLat(mapLat);
    props.addLong(mapLong);
    //
    // const latitude = props.fileLat;
    // const longitude = props.fileLong;
    //
    // const GPSLatitudeRef = latRef;
    // const GPSLongitudeRef = lngRef;

    // return [latitude, longitude, GPSLatitudeRef, GPSLongitudeRef];
    console.log(latRef);
  }
}
export default HandleFileSelectFunction;
