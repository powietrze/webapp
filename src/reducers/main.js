import { Map } from 'immutable';

import * as actions from '../actions';


const initialState = new Map({
  isLoading: false,
  error: null,
});

export const main = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_REQUEST:
      return state.withMutations((s) => {
        s.set('isLoading', true);
        s.set('error', null);
      });
    case actions.FETCH_STATIONS_SUCCESS:
      return state.set('isLoading', false);
    case actions.FETCH_STATIONS_FAILURE:
      return state.withMutations((s) => {
        s.set('isLoading', false);
        s.set('error', action.error);
      });

    default:
      return state;
  }
};
