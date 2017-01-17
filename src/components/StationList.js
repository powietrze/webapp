import React, {
  PureComponent,
  PropTypes,
} from 'react';

import {Station} from './Station';

export class StationList extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const {isLoading} = this.props;

    return (
      <div>
        Stacje:
        {isLoading && 'Ładuję...'}

        <Station>Stacja 1</Station>
        <Station>Stacja 2</Station>
        <Station>Stacja 3</Station>
        <Station>Stacja 4</Station>
        <Station>Stacja 5</Station>
        <Station>Stacja 6</Station>
        <Station>Stacja 7</Station>
        <Station>Stacja 8</Station>
        <Station>Stacja 9</Station>
        <Station>Stacja 10</Station>
        <Station>Stacja 11</Station>
      </div>
    )
  }
}
