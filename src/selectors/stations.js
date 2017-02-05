export const stations = (state) => {
  const stationsMap = state.stations.get('stations');
  const queryString = state.main.get('searchQuery').trim().toLowerCase();
  const regex = new RegExp(queryString, 'i');

  const stationsList = stationsMap
    .filter(s => regex.test(removePolishDiacritics(s.get('name'))))
    .toList()
    .sort((a, b) => a.get('name').localeCompare(b.get('name')));
  return stationsList.toJS();
};

const polishDiacritics = {
  a: /ą|Ą/g,
  c: /ć|Ć/g,
  e: /ę|Ę/g,
  l: /ł|Ł/g,
  n: /ń|Ą/g,
  o: /ó|Ó/g,
  s: /ś|Ś/g,
  z: /ź|Ź|ż|Ż/g,
};

function removePolishDiacritics(string) {
  let fixedString = string;
  for (const key in polishDiacritics) { // eslint-disable-line guard-for-in, no-restricted-syntax
    fixedString = fixedString.replace(polishDiacritics[key], key);
  }
  return string;
}

export const isFavorited = (state, stationId) => !!state.stations.getIn(['favorites', stationId]);
