import React, {
  PureComponent,
  PropTypes,
} from 'react';

import styles from './StationSearchInput.css';


const DEBOUNCE_IN_MS = 500;

export class StationSearchInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super();

    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  timeoutId = null;

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        placeholder="Wpisz nazwę, aby wyszukać"
        className={styles.StationSearchInput}
        value={value}
        onChange={this.handleOnChange}
      />
    );
  }

  handleOnChange = (event) => {
    clearTimeout(this.timeoutId);
    const value = event.target.value;

    this.setState({ value });

    this.timeoutId = setTimeout(
      () => {
        this.props.onChange(value);
        this.timeoutId = null;
      },
      DEBOUNCE_IN_MS,
    );
  }
}
