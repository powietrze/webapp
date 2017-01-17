import { connect } from 'react-redux';

import * as selectors from '../selectors/stations';
import { Main } from './Main';


const mapStateToProps = state => ({
  isLoadingStations: selectors.isLoading(state),
  stations: selectors.stations(state),
});

export const MainContainer = connect(mapStateToProps)(Main);
