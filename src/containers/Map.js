import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { PlaceMarker } from "../components/PlaceMarker";
import { PlaceInfoWindow } from "../components/PlaceInfoWindow";
import { connect } from "react-redux";
import * as actions from "../actions";

const LocationMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  >
    {props.places.length > 0 &&
      props.places.map(place => (
        <PlaceMarker
          key={`place${place.id}`}
          id={place.id}
          lat={place.latitude}
          lng={place.longitude}
          description={place.description}
          contactName={place.contactName}
          contactPhone={place.contactPhone}
          email={place.email}
          name={place.name}
        />
      ))}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);

    this.xMapBounds = { min: null, max: null };
    this.yMapBounds = { min: null, max: null };

    this.mapFullyLoaded = false;
    this.zoom = 7;

    this.state = {
      places: [],
      centerLat: 43.156338,
      centerLng: -77.614304,
      bounds: []
    };
  }

  handleMapChanged() {
    this.getMapBounds();
    this.fetchPlacesFromApi();
    this.setMapCenterPoint();
  }

  handleMapMounted(map) {
    this.map = map;
  }

  handleMapFullyLoaded() {
    if (this.MapFullyLoaded) return;
    this.MapFullyLoaded = true;
    this.handleMapChanged();
  }

  setMapCenterPoint() {
    this.setState({
      centerLat: this.map.getCenter().lat(),
      centerLng: this.map.getCenter().lng()
    });
    this.props.setCenter(this.state.centerLat, this.state.centerLng);
  }

  fetchPlacesFromApi() {
    this.props.getLocations(
      null,
      this.xMapBounds.min,
      this.xMapBounds.max,
      this.yMapBounds.min,
      this.yMapBounds.max
    );
    this.props.getAllLocations();
  }

  getMapBounds() {
    const mapBounds = this.map.getBounds();

    const xMapBounds = mapBounds.fa;
    const yMapBounds = mapBounds.ma;

    this.xMapBounds.min = xMapBounds.j;
    this.xMapBounds.max = xMapBounds.l;

    this.yMapBounds.min = yMapBounds.j;
    this.yMapBounds.max = yMapBounds.l;

    this.setState({
      bounds: [
        this.xMapBounds.min,
        this.xMapBounds.max,
        this.yMapBounds.min,
        this.yMapBounds.max
      ]
    });
    this.props.setBounds(this.state.bounds);
  }

  render() {
    const { centerLat, centerLng } = this.state;
    const places = this.props.places.places;
    // debugger;
    return (
      <div>
        <div className="map" style={{ width: `750px`, height: `550px` }}>
          <LocationMap
            onMapMounted={this.handleMapMounted.bind(this)}
            handleMapChanged={this.handleMapChanged.bind(this)}
            handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
            center={{ lat: centerLat, lng: centerLng }}
            places={places}
            zoom={this.zoom}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.getLocationsReducer,
    allPlaces: state.getLocationsReducer,
    center: state.mapReducer,
    bounds: state.mapReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(Map);
