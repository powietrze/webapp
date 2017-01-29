export const stations = (state) => {
  const stationsMap = state.stations.get('stations');
  const stationsList = stationsMap.toList().sort((a, b) => a.get('name').localeCompare(b.get('name')));
  return stationsList.toJS();
};
