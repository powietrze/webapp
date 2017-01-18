/* global google */


import React, {
  PureComponent,
  PropTypes,
} from 'react';
import Script from 'scriptjs';

import { config } from '../config';
import styles from './Map.css';


export class Map extends PureComponent {
  static propTypes = {
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lon: PropTypes.string.isRequired,
    })).isRequired,
  };

  state = {
    googleMap: null,
    markers: [],
  };

  componentDidMount() {
    Script(`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}`, () => {
      this.initializeMap();
    });
  }

  componentWillReceiveProps(props) {
    this.recreateMarkers(props.stations);
  }

  recreateMarkers = (stations) => {
    const { markers, googleMap } = this.state;

    markers.map(m => m.setMap(null));

    const newMarkers = googleMap ? stations.map(m => createMarker(googleMap, m)) : [];

    this.setState({
      markers: newMarkers,
    });
  };

  initializeMap = () => {
    this.state.googleMap = new window.google.maps.Map(this.mapNode, {
      disableDefaultUI: true,
      zoomControl: true,
    });
    this.state.googleMap.fitBounds({
      east: 23.93,
      north: 54.84,
      south: 48.98,
      west: 14.11,
    });
    this.recreateMarkers(this.props.stations);
  };

  saveNode = (node) => {
    this.mapNode = node;
  };

  render() {
    return (
      <div className={styles.map} ref={this.saveNode} />
    );
  }
}

const createMarker = (map, station) => new google.maps.Marker({
  map,
  position: {
    lat: Number(station.lat),
    lng: Number(station.lon),
  },
});

