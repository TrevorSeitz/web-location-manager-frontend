import React, { Component } from "react";
import * as EXIF from "exif-js";
import * as actions from "../actions";

class latLngCalculator extends Component {
  handleFileSelect = e => {
    const image = e.target.files[0];
    const place = this.state.place;
    place.image = image;
    place.fileName = image.name;
    let mapLat = "";
    let mapLong = "";
    let lat = "";
    let lng = "";
    let latRef = "";
    let lngRef = "";
    let fileName = "";

    EXIF.getData(image, function() {
      lat = EXIF.getTag(this, "GPSLatitude");
      lng = EXIF.getTag(this, "GPSLongitude");
      latRef = EXIF.getTag(this, "GPSLatitudeRef");
      lngRef = EXIF.getTag(this, "GPSLongitudeRef");

      makeReadable(lat, lng, latRef, lngRef);
    });

    function makeReadable(lat, lng, latRef, lngRef) {
      mapLat = parseFloat(
        lat[0]["numerator"] +
          lat[1]["numerator"] / 60 +
          lat[2]["numerator"] / 360000
      ).toFixed(13);

      if (latRef === "S") {
        mapLat = -1 * mapLat;
      } else {
        mapLat = 1 * mapLat;
      }

      mapLong = parseFloat(
        lng[0]["numerator"] +
          lng[1]["numerator"] / 60 +
          lng[2]["numerator"] / 360000
      ).toFixed(13);

      if (lngRef === "W") {
        mapLong = -1 * mapLong;
      } else {
        mapLong = 1 * mapLong;
      }

      setProps(mapLat, mapLong, latRef, lngRef);
    }

    const setProps = (mapLat, mapLong, latRef, lngRef) => {
      const place = this.state.place;
      // return {
      this.props.addLat(mapLat);
      this.props.addLong(mapLong);

      place.latitude = this.props.fileLat;
      place.longitude = this.props.fileLong;
      place.GPSLatitudeRef = latRef;
      place.GPSLongitudeRef = lngRef;
    };
  };
}
