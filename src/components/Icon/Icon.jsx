import React, { PropTypes } from 'react';

import ArrowLeft from './arrow-left.svg';
import StarFilled from './star-filled.svg';
import StarOutline from './star-outline.svg';
import styles from './Icon.css';


const IconTypes = ['arrow-left', 'star-filled', 'star-outline'];


export class Icon extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(IconTypes).isRequired,
  };

  render() {
    let IconType;
    switch (this.props.type) {
      case (IconTypes[0]):
        IconType = ArrowLeft;
        break;
      case (IconTypes[1]):
        IconType = StarFilled;
        break;
      case (IconTypes[2]):
        IconType = StarOutline;
        break;
      default:
        IconType = ArrowLeft;
        break;
    }

    return <IconType className={styles.Icon} />;
  }
}
