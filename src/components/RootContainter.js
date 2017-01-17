import { connect } from 'react-redux';

import { Root } from './Root';
import { fetchStations } from '../actions';


const mapDispatchToProps = {
  fetchStations,
};

export const RootContainer = connect(null, mapDispatchToProps)(Root);
