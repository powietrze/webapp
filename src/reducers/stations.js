import { Map } from 'immutable';

import * as actions from '../actions';


const initialState = new Map({
  stations: new Map(),
});

export const stations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_SUCCESS:
      return state.set('stations', normalizedStations(action.stations));

    default:
      return state;
  }
};

const normalizedStations = nonNormalizedStations => nonNormalizedStations
  .reduce((acc, prev) => acc.set(prev.id, new Map(prev)), new Map().asMutable())
  .asImmutable();
