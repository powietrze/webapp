export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';

export const fetchStations = () => (dispatch, getStore) => {
  dispatch(fetchStationsRequest());

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  })
    .then(() => dispatch(fetchStationsSuccess([])))
    .catch(e => dispatch(fetchStationsFailure(e)));
};

export const fetchStationsRequest = () => ({
  type: FETCH_STATIONS_REQUEST,
});

export const fetchStationsSuccess = (stations) => ({
  type: FETCH_STATIONS_SUCCESS,
  stations,
});

export const fetchStationsFailure = (error) => ({
  type: FETCH_STATIONS_FAILURE,
  error,
});
