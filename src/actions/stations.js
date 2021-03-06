import * as network from '../network';
import { stations as stationSelectors } from '../selectors';


export const SETUP = 'SETUP';
export const setup = stationId => ({
  type: SETUP,
  stationId,
});

export const setupRequest = () => (dispatch) => {
  dispatch(setup());

  const ids = JSON.parse(localStorage.getItem('favoritedStationsIds'));
  if (ids) {
    dispatch(loadFavorited(ids));
    loadFavorites(ids)(dispatch);
  }
};


const loadFavorites = ids => (dispatch) => {
  dispatch(loadFavoritesRequest());

  return Promise.all(ids.map(i => loadFullStationData(i)(dispatch)))
    .then(() => dispatch(loadFavoritesSuccess()))
    .catch(() => dispatch(loadFavoritesFailure()));
};

export const LOAD_FAVORITED_REQUEST = 'LOAD_FAVORITED_REQUEST';
export const LOAD_FAVORITED_SUCCESS = 'LOAD_FAVORITED_SUCCESS';
export const LOAD_FAVORITED_FAILURE = 'LOAD_FAVORITED_FAILURE';
const loadFavoritesRequest = () => ({
  type: LOAD_FAVORITED_REQUEST,
});
const loadFavoritesSuccess = () => ({
  type: LOAD_FAVORITED_SUCCESS,
});
const loadFavoritesFailure = () => ({
  type: LOAD_FAVORITED_FAILURE,
});


const loadFullStationData = id => dispatch => Promise
    .all([
      fetchStation(id)(dispatch),
      fetchStationSensors(id)(dispatch),
    ])
    .then(([_, sensorsAction]) => // eslint-disable-line no-unused-vars
      Promise.all(sensorsAction.sensors.map(sensor => fetchSensorReadings(sensor.id)(dispatch))),
    );


export const LOAD_FAVORITED = 'LOAD_FAVORITED';
export const loadFavorited = favoritedIds => ({
  type: LOAD_FAVORITED,
  favoritedIds,
});


export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';

export const fetchStationsRequest = () => ({
  type: FETCH_STATIONS_REQUEST,
});

export const fetchStationsSuccess = stations => ({
  type: FETCH_STATIONS_SUCCESS,
  stations,
});

export const fetchStationsFailure = error => ({
  type: FETCH_STATIONS_FAILURE,
  error,
});

export const fetchStations = () => (dispatch) => {
  dispatch(fetchStationsRequest());

  return network.fetchStations()
    .then(stations => dispatch(fetchStationsSuccess(stations)))
    .catch(e => dispatch(fetchStationsFailure(e)));
};

export const FETCH_STATION_REQUEST = 'FETCH_STATION_REQUEST';
export const FETCH_STATION_SUCCESS = 'FETCH_STATION_SUCCESS';
export const FETCH_STATION_FAILURE = 'FETCH_STATION_FAILURE';

export const fetchStationRequest = id => ({
  type: FETCH_STATION_REQUEST,
  id,
});

export const fetchStationSuccess = station => ({
  type: FETCH_STATION_SUCCESS,
  station,
});

export const fetchStationFailure = error => ({
  type: FETCH_STATION_FAILURE,
  error,
});

export const fetchStation = id => (dispatch) => {
  dispatch(fetchStationRequest(id));

  return network.fetchStation(id)
    .then(station => dispatch(fetchStationSuccess(station)))
    .catch(e => dispatch(fetchStationFailure(e)));
};


export const FETCH_STATION_DETAILS_REQUEST = 'FETCH_STATION_DETAILS_REQUEST';
export const FETCH_STATION_DETAILS_SUCCESS = 'FETCH_STATION_DETAILS_SUCCESS';
export const FETCH_STATION_DETAILS_FAILURE = 'FETCH_STATION_DETAILS_FAILURE';

export const fetchStationDetailsRequest = id => ({
  type: FETCH_STATION_DETAILS_REQUEST,
  id,
});

export const fetchStationDetailsSuccess = id => ({
  type: FETCH_STATION_DETAILS_SUCCESS,
  id,
});

export const fetchStationDetailsFailure = error => ({
  type: FETCH_STATION_DETAILS_FAILURE,
  error,
});


export const fetchStationDetails = id => (dispatch) => {
  dispatch(fetchStationDetailsRequest(id));

  return Promise
    .all([
      fetchStation(id)(dispatch),
      fetchStationSensors(id)(dispatch),
    ])
    .then(([_, sensorsAction]) => // eslint-disable-line no-unused-vars
      Promise.all(sensorsAction.sensors.map(sensor => fetchSensorReadings(sensor.id)(dispatch))),
    )
    .then(() => dispatch(fetchStationDetailsSuccess(id)))
    .catch(e => dispatch(fetchStationDetailsFailure(e)));
};

export const FETCH_STATION_SENSORS_REQUEST = 'FETCH_STATION_SENSORS_REQUEST';
export const FETCH_STATION_SENSORS_SUCCESS = 'FETCH_STATION_SENSORS_SUCCESS';
export const FETCH_STATION_SENSORS_FAILURE = 'FETCH_STATION_SENSORS_FAILURE';

export const fetchStationSensorsRequest = stationId => ({
  type: FETCH_STATION_SENSORS_REQUEST,
  stationId,
});

export const fetchStationSensorsSuccess = sensors => ({
  type: FETCH_STATION_SENSORS_SUCCESS,
  sensors,
});

export const fetchStationSensorsFailure = error => ({
  type: FETCH_STATION_SENSORS_FAILURE,
  error,
});

export const fetchStationSensors = stationId => (dispatch) => {
  dispatch(fetchStationSensorsRequest(stationId));

  return network.fetchStationSensors(stationId)
    .then(sensors => dispatch(fetchStationSensorsSuccess(sensors)))
    .catch(e => dispatch(fetchStationSensorsFailure(e)));
};

export const FETCH_SENSOR_READINGS_REQUEST = 'FETCH_SENSOR_READINGS_REQUEST';
export const FETCH_SENSOR_READINGS_SUCCESS = 'FETCH_SENSOR_READINGS_SUCCESS';
export const FETCH_SENSOR_READINGS_FAILURE = 'FETCH_SENSOR_READINGS_FAILURE';

export const fetchSensorReadingsRequest = sensorId => ({
  type: FETCH_SENSOR_READINGS_REQUEST,
  sensorId,
});

export const fetchSensorReadingsSuccess = (sensorId, readings) => ({
  type: FETCH_SENSOR_READINGS_SUCCESS,
  sensorId,
  readings,
});

export const fetchSensorReadingsFailure = error => ({
  type: FETCH_SENSOR_READINGS_FAILURE,
  error,
});

export const fetchSensorReadings = sensorId => (dispatch) => {
  dispatch(fetchSensorReadingsRequest(sensorId));

  return network.fetchSensorReadings(sensorId)
    .then(readings => dispatch(fetchSensorReadingsSuccess(sensorId, readings)))
    .catch(e => dispatch(fetchSensorReadingsFailure(e)));
};


export const TOGGLE_FAVORITE_STATION = 'TOGGLE_FAVORITE_STATION';

export const toggleFavoriteStation = stationId => ({
  type: TOGGLE_FAVORITE_STATION,
  stationId,
});

export const toggleFavoriteStationRequest = stationId => (dispatch, getState) => {
  dispatch(toggleFavoriteStation(stationId));

  localStorage.setItem(
    'favoritedStationsIds',
    JSON.stringify(stationSelectors.favoritedStationsIds(getState())),
  );
};
