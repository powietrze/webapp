export const isLoading = state => state.stationDetails.get('isLoading');

export const stationSensors = (state, stationId) => state.stations.get('sensors').filter(s => s.get('stationId') === stationId).toList();

export const station = (state, stationId) => state.stations.getIn(['stations', stationId]);

export const stationLat = (state, stationId) => station(state, stationId).get('lat');

export const stationLon = (state, stationId) => station(state, stationId).get('lon');

export const stationName = (state, stationId) => state.stations.getIn(['stations', stationId, 'name']);

export const stationStreet = (state, stationId) => station(state, stationId).get('street');
