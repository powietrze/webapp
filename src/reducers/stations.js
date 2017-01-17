import * as actions from '../actions';


const initialState = {
  isLoading: false,
};


export const stations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STATIONS_REQUEST:
      return { isLoading: true };
    case actions.FETCH_STATIONS_SUCCESS:
      return { isLoading: false };
    case actions.FETCH_STATIONS_FAILURE:
      return { isLoading: false };

    default:
      return state;
  }
};
