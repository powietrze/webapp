import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { stationSearch } from '../actions';
import {
  main as mainSelectors,
  stations as stationsSelectors,
} from '../selectors';
import { Main } from './Main';
import { StationDetailsContainer } from './StationDetails';


const mapStateToProps = state => ({
  isLoadingStations: mainSelectors.isLoading(state),
  stations: stationsSelectors.stations(state),
  searchQuery: mainSelectors.searchQuery(state),
});

const mapDispatchToProps = dispatch => ({
  onStationSelect: id => dispatch(push(StationDetailsContainer.path.replace(':id', id))),
  onStationSearch: query => dispatch(stationSearch(query)),
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
