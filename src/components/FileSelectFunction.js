import * as EXIF from "exif-js";

function HandleFileSelectFunction(e, props) {
  const image = e.target.files[0];

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
  }
}
export default HandleFileSelectFunction;
