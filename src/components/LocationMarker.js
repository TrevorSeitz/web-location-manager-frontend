import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import { LocationInfoWindow } from './LocationInfoWindow'

export class LocationMarker extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      showTooltip: false
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const { showTooltip } = this.state
    const { lat, lng, name, description} = this.props

    return (
      <Marker // markerWithLabel={window.MarkerWithLabel}
        onClick={this.clickTooltip.bind(this)}
        position={{ lat: parseFloat(lat), lng: parseFloat(lng) }} >);
      
        {showTooltip && (
          <LocationInfoWindow description={description}
            name={name}
            closeWindow={this.closeWindow.bind(this)} />
        )} 
      </Marker> 
    )
  }
}

export default LocationMarker