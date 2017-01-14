import React, {
  PureComponent
} from 'react';


export class StationDetails extends PureComponent {
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
