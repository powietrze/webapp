export const stations = (state) => {
  const stationsMap = state.stations.get('stations');
  const stationsList = stationsMap.toList();
  return stationsList.toJS();
};
