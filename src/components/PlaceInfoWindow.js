import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";

export class PlaceInfoWindow extends Component {
  render() {
    const { description, name, contactName, contactPhone, email } = this.props;

    return (
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{contactName}</p>
          <p>{contactPhone}</p>
          <p>{email}</p>
          <span />
        </div>
      </InfoWindow>
    );
  }
}

export default PlaceInfoWindow;
