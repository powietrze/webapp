import * as actions from '../actions';


const initialState = {
  isLoading: false,
  stations: [],
};

export const stations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_REQUEST:
      return {
        isLoading: true,
        stations: state.stations,
      };
    case actions.FETCH_STATIONS_SUCCESS:
      return {
        isLoading: false,
        stations: action.stations,
      };
    case actions.FETCH_STATIONS_FAILURE:
      return {
        isLoading: false,
        stations: state.stations,
      };

    default:
      return state;
  }
};
