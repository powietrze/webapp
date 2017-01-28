import { connect } from 'react-redux';

import { RootRoute } from './RootRoute';
import { stationDetails } from '../selectors';
import { fetchStations } from '../actions';

const mapStateToProps = (state, props) => ({
  stationName: stationDetails.stationName(state, props.router.params.id),
});

const mapDispatchToProps = {
  fetchStations,
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootRoute);
