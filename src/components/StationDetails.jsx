import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';


export class StationDetails extends Component {
  render() {
    return (
      <div>
        STATION DETAILS
        {this.props.params.id}
      </div>
    );
  }
}
