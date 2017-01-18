import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as selectors from '../selectors/stations';
import { Main } from './Main';
import { StationDetails } from './StationDetails';


const mapStateToProps = state => ({
  isLoadingStations: selectors.isLoading(state),
  stations: selectors.stations(state),
});

const mapDispatchToProps = dispatch => ({
  onStationSelect: id => dispatch(push(StationDetails.path.replace(':id', id))),
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
