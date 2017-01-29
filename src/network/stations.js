import fetch from 'isomorphic-fetch';

import { config } from '../config';


const STATIONS_URL = `${config.apiHost}rest/stations/`;
const SENSORS_URL = `${config.apiHost}rest/stations/:stationId/sensors/`;
const READINGS_URL = `${config.apiHost}rest/sensors/:sensorId/readings/`;

export const fetchStations = () => fetch(STATIONS_URL)
  .then(response => response.json())
  .then(responseJson => responseJson.stations);

export const fetchStation = id => fetch(`${STATIONS_URL}${id}/`)
  .then(response => response.json());

export const fetchStationSensors = stationId =>
  fetch(SENSORS_URL.replace(':stationId', stationId))
    .then(response => response.json())
    .then(responseJson => responseJson.sensors);

export const fetchSensorReadings = sensorId =>
  fetch(READINGS_URL.replace(':sensorId', sensorId))
    .then(response => response.json())
    .then(responseJson => responseJson.readings);
