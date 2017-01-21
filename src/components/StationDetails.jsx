import React, {
  PureComponent,
  PropTypes,
} from 'react';


export class StationDetails extends PureComponent {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    onSetup: PropTypes.func.isRequired,
  };

  static path = '/station/:id/';

  componentDidMount() {
    const { onSetup, params } = this.props;
    onSetup(params.id);
  }

  render() {
    return (
      <div>
        STATION DETAILS
        {this.props.params.id}
      </div>
    );
  }
}
