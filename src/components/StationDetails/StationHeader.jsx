import React, {
  PureComponent,
  PropTypes,
} from 'react';


export class StationHeader extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
  };

  render() {
    const { name, street } = this.props;

    return (
      <div>
        <span>Nazwa:</span>
        <span>{name}</span>

        {street &&
        <div>
          <span>Ulica:</span>
          <span>{street}</span>
        </div>
        }
      </div>
    );
  }
}
