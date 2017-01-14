import React, {PureComponent} from 'react';
import Script from 'scriptjs';

import {config} from '../config';
import styles from './Map.css';


export class Map extends PureComponent {
  componentDidMount() {
    Script(`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}`, () => {
      this.initializeMap();
    });
  }

  initializeMap = () => {
    const googleMap = new google.maps.Map(this.mapNode, {
      disableDefaultUI: true,
      zoomControl: true,
    });
    googleMap.fitBounds({
      east: 23.93,
      north: 54.84,
      south: 48.98,
      west: 14.11,
    });
  };

  render() {
    return (
      <div className={styles.map} ref={node => this.mapNode = node}></div>
    );
  }
}
