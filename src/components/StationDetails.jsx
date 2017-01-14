import React, {
  PureComponent,
  PropTypes,
} from 'react';


export class StationDetails extends PureComponent {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  };

  static path = '/station/:id/';

  render() {
    return (
      <div>
        STATION DETAILS
        {this.props.params.id}
      </div>
    );
  }
}
