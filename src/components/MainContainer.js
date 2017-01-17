import { connect } from 'react-redux';

import { Main } from './Main';


const mapStateToProps = state => ({
  isLoadingStations: state.isLoading,
});

export const MainContainer = connect(mapStateToProps)(Main);
