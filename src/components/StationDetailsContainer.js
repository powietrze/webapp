import { connect } from 'react-redux';

import { StationDetails } from './StationDetails';
import { fetchStationDetails } from '../actions';


const mapDispatchToProps = {
  onSetup: fetchStationDetails,
};

export const StationDetailsContainer = connect(null, mapDispatchToProps)(StationDetails);
