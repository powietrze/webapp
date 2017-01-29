import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  main as mainSelectors,
  stations as stationsSelectors,
} from '../selectors';
import { Main } from './Main';
import { StationDetailsContainer } from './StationDetails';


const mapStateToProps = state => ({
  isLoadingStations: mainSelectors.isLoading(state),
  stations: stationsSelectors.stations(state),
});

const mapDispatchToProps = dispatch => ({
  onStationSelect: id => dispatch(push(StationDetailsContainer.path.replace(':id', id))),
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
