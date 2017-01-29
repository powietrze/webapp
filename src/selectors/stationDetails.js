export const isLoading = state => state.stationDetails.get('isLoading');

export const stationSensors = (state, stationId) => state.stations.get('sensors').filter(s => s.get('stationId') === stationId).toList();

export const stationName = (state, stationId) => state.stations.getIn(['stations', stationId, 'name']);

export const stationStreet = (state, stationId) => state.stations.getIn(['stations', stationId, 'street']);
