export const isLoading = state => state.stationDetails.get('isLoading');

export const station = (state, stationId) => state.stations.getIn(['stations', stationId]);

export const stationSensors = (state, stationId) => state.stations.get('sensors').filter(s => s.get('stationId') === stationId).toList();
