import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { LocationInfoWindow } from "./LocationInfoWindow";
import { LocationMarker } from "./LocationMarker";

const Location = withGoogleMap(props => (
  <GoogleMap 
  defaultCenter={props.center} defaultZoom={props.zoom}>
  {props.places}
  </GoogleMap>
));

export class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 7

    this.state = {
      lat: 43.156338,
      lng: 282.385696
    };
  }

  render() {
    const { lat, lng } = this.state;
    const places = [<LocationMarker lat={lat} lng={lng} name={"Hotel"} description={"Hotel desc"} />];

    return <div style={{ width: `750px`, height: `750px` }}>
      <Location center={{ lat: lat, lng: lng }} zoom={this.zoom} places={places} containerElement={<div style={{ height: `100%` }} />} mapElement={<div style={{ height: `100%` }}/>} />
      </div>;
  }
  }
export default Map