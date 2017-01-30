/* global google */
/* global MarkerClusterer */


import React, {
  PureComponent,
  PropTypes,
} from 'react';
import Script from 'scriptjs';
import '../vendor/MarkerClusterer';

import { config } from '../config';
import styles from './Map.css';


const CLUSTER_IMAGE_URL = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

export class Map extends PureComponent {
  static propTypes = {
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lon: PropTypes.string.isRequired,
    })).isRequired,
    onStationSelect: PropTypes.func.isRequired,
  };

  state = {
    googleMap: null,
    markers: [],
  };

  clusterer = null;

  componentDidMount() {
    Script(`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}`, () => {
      this.initializeMap();
    });
  }

  componentWillReceiveProps(props) {
    this.recreateMarkers(props.stations);
  }

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

  recreateMarkers = (stations) => {
    const { markers, googleMap } = this.state;

    markers.map(m => m.setMap(null));
    if (this.clusterer) {
      this.clusterer.clearMarkers();
    }

    const newMarkers = googleMap ?
      stations.map(m => createMarker(googleMap, m, this.handleMarkerClick)) :
      [];

    if (googleMap) {
      this.clusterer = new MarkerClusterer( // eslint-disable-line no-new
        googleMap,
        newMarkers,
        { imagePath: CLUSTER_IMAGE_URL },
      );
    }

    this.setState({
      markers: newMarkers,
    });
  };

  handleMarkerClick = (id) => {
    this.props.onStationSelect(id);
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

const createMarker = (map, station, onClick) => {
  const marker = new google.maps.Marker({
    map,
    position: {
      lat: Number(station.lat),
      lng: Number(station.lon),
    },
    title: station.name,
  });
  marker.addListener('click', () => onClick(station.id));
  return marker;
};

