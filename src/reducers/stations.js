import { Map, fromJS, List } from 'immutable';

import * as actions from '../actions';


const initialState = new Map({
  stations: new Map(),
  sensors: new Map(),
});

export const stations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_SUCCESS:
      return state.set('stations', normalizedStations(action.stations));

    case actions.FETCH_STATION_SUCCESS:
      return state.set('stations', state.get('stations').set(action.station.id, fromJS(action.station)));

    case actions.FETCH_STATION_SENSORS_SUCCESS:
      return state.set('sensors', state.get('sensors').withMutations((s) => {
        action.sensors.map(sensor => s.set(sensor.id, fromJS(sensor).set('readings', new List())));
      }));

    case actions.FETCH_SENSOR_READINGS_SUCCESS:
      return state.setIn(['sensors', action.sensorId, 'readings'], fromJS(action.readings));

    default:
      return state;
  }
};

const normalizedStations = nonNormalizedStations => nonNormalizedStations
  .reduce((acc, prev) => acc.set(prev.id, new Map(prev)), new Map().asMutable())
  .asImmutable();
