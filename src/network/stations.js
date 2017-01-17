import { config } from '../config';


const STATIONS_URL = `${config.apiHost}rest/stations/`;

export const fetchStations = () => fetch(STATIONS_URL)
  .then(response => response.json())
  .then(responseJson => responseJson.stations);
