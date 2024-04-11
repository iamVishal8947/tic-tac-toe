// app/components/cell.js
import Component from '@glimmer/component';

export default class CellComponent extends Component {
  get cellContent() {
    return this.args.player ? `Player ${this.args.player}` : '';
  }
}
