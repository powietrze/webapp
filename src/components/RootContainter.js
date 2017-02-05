import { connect } from 'react-redux';

import { RootRoute } from './RootRoute';
import { stationDetails, stations } from '../selectors';
import { fetchStations, toggleFavoriteStation } from '../actions';

const mapStateToProps = (state, props) => ({
  stationName: stationDetails.stationName(state, props.router.params.id),
  isStationFavorited: stations.isFavorited(state, props.router.params.id),
});

const mapDispatchToProps = {
  fetchStations,
  onToggleFavoriteStation: toggleFavoriteStation,
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootRoute);
