import React, { Component } from "react";
import { Marker } from "react-google-maps";
import { PlaceInfoWindow } from "./PlaceInfoWindow";

export class PlaceMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  closeWindow() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { showTooltip } = this.state;
    const {
      lat,
      lng,
      name,
      description,
      contactName,
      contactPhone,
      email,
      id
    } = this.props;

    // console.log(this.props);

    return (
      <Marker
        markerWithLabel={window.MarkerWithLabel}
        onClick={this.clickTooltip.bind(this)}
        position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        key={`marker${id}`}
      >
        {showTooltip && (
          <PlaceInfoWindow
            key={`info${id}`}
            description={description}
            name={name}
            contactName={contactName}
            contactPhone={contactPhone}
            email={email}
            closeWindow={this.closeWindow.bind(this)}
          />
        )}
      </Marker>
    );
  }
}

export default PlaceMarker;
