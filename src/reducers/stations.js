import { Map } from 'immutable';

import * as actions from '../actions';


const initialState = new Map({
  isLoading: false,
  stations: new Map(),
});

export const stations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_REQUEST:
      return state.set('isLoading', true);
    case actions.FETCH_STATIONS_SUCCESS:
      return state.withMutations((s) => {
        s.set('isLoading', false);
        s.set('stations', normalizedStations(action.stations));
      });
    case actions.FETCH_STATIONS_FAILURE:
      return state.set('isLoading', false);

    default:
      return state;
  }
};

const normalizedStations = nonNormalizedStations => nonNormalizedStations
  .reduce((acc, prev) => acc.set(prev.id, new Map(prev)), new Map().asMutable())
  .asImmutable();
