import { connect } from 'react-redux';

import { StationDetails } from './StationDetails';
import { fetchStationDetails } from '../../actions';
import { stationDetails as stationDetailsSelectors } from '../../selectors';


const mapStateToProps = (state, props) => ({
  isLoading: stationDetailsSelectors.isLoading(state),
  name: stationDetailsSelectors.stationName(state, props.params.id),
  street: stationDetailsSelectors.stationStreet(state, props.params.id),
  sensors: stationDetailsSelectors.stationSensors(state, props.params.id),
});

const mapDispatchToProps = {
  onSetup: fetchStationDetails,
};

export const StationDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(StationDetails);
