import Inferno from 'inferno';
import Component from 'inferno-component';

import {Map} from './Map.jsx';
import {Station} from './Station.jsx';


export class Main extends Component {
  render() {
    return (
      <div>
        <Map/>
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
    );
  }
}
