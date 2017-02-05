import { connect } from 'react-redux';

import { RootRoute } from './RootRoute';
import { stationDetails, stations } from '../selectors';
import { setupRequest, fetchStations, toggleFavoriteStationRequest } from '../actions';

const mapStateToProps = (state, props) => ({
  stationName: stationDetails.stationName(state, props.router.params.id),
  isStationFavorited: stations.isFavorited(state, props.router.params.id),
});

const mapDispatchToProps = {
  setup: setupRequest,
  fetchStations,
  onToggleFavoriteStation: toggleFavoriteStationRequest,
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootRoute);
