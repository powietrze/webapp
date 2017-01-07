import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';


export class App extends Component {
  render() {
    return (
      <div>
        Hello Powietrze from Inferno!
        {this.props.children}
      </div>
    );
  }
}
