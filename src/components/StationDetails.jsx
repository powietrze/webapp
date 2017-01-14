import React, {PureComponent} from 'react';


export class StationDetails extends PureComponent {
  render() {
    return (
      <div>
        STATION DETAILS
        {this.props.params.id}
      </div>
    );
  }
}
