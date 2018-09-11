import React, { Component } from 'react';
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
    const { lat, lng, name, description } = this.props

    return (
      <Marker        
        ...
        onClick={this.clickTooltip.bind(this)}>
        {showTooltip && (
          <LocationInfoWindow description={description}
            name={name}
            closeWindow={this.closeWindow.bind(this)} />
        )}
      </Marker>
    );
  }
}

export defaultLocationeMarker