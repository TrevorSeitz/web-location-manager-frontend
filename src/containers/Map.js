import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { PlaceMarker } from "../components/PlaceMarker";
import { connect } from "react-redux";
// import ListLocations from "./ListLocations";
// import NewPlaceForm from "../containers/NewPlaceForm";

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

export class Map extends Component {
  constructor(props) {
    super(props);

    this.xMapBounds = { min: null, max: null };
    this.yMapBounds = { min: null, max: null };

    this.mapFullyLoaded = false;
    this.zoom = 7;

    this.state = {
      places: [],
      lat: 43.156338,
      lng: -77.614304
    };
  }

  handleMapChanged() {
    this.getMapBounds();
    this.setMapCenterPoint();
    this.fetchPlacesFromApi();
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
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    });
  }

  fetchPlacesFromApi() {
    this.setState({ places: [] });
    fetch(
      `/api/places?min_lng=${this.xMapBounds.min}&max_lng=${
        this.xMapBounds.max
      }&min_lat=${this.yMapBounds.min}&max_lat=${this.yMapBounds.max}`,
      { method: "GET" }
    )
      .then(response => response.json())
      .then(response => this.setState({ places: response }));
  }

  getMapBounds() {
    var mapBounds = this.map.getBounds();
    var xMapBounds = mapBounds.b;
    var yMapBounds = mapBounds.f;

    this.xMapBounds.min = xMapBounds.b;
    this.xMapBounds.max = xMapBounds.f;

    this.yMapBounds.min = yMapBounds.b;
    this.yMapBounds.max = yMapBounds.f;
  }

  render() {
    const { lat, lng, places } = this.state;

    return (
      <div>
        <div className="map" style={{ width: `750px`, height: `550px` }}>
          <LocationMap
            onMapMounted={this.handleMapMounted.bind(this)}
            handleMapChanged={this.handleMapChanged.bind(this)}
            handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
            center={{ lat: lat, lng: lng }}
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
  debugger;
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(Map);
