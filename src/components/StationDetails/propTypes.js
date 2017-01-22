import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


export const ReadingPropType = ImmutablePropTypes.contains({
  dateTime: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
});

export const SensorContents = {
  paramFormula: PropTypes.string.isRequired,
  paramName: PropTypes.string.isRequired,
  readings: ImmutablePropTypes.listOf(ReadingPropType).isRequired,
};

export const SensorPropType = ImmutablePropTypes.contains(SensorContents);
