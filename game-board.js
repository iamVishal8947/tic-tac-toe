// 





// app/components/game-board.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GameBoardComponent extends Component {
  @tracked cells = Array(9).fill(null);
  @tracked currentPlayer = 'X';
  @tracked winner = null;

  get isBoardFull() {
    return this.cells.every(cell => cell);
  }

  get nextPlayer() {
    return this.winner ? null : this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
        this.winner = this.cells[a];
        return;
      }
    }

    if (this.isBoardFull) {
      this.winner = 'Draw';
    }
  }

  cellClicked = (index) => {
    if (!this.cells[index] && !this.winner) {
      this.cells[index] = this.currentPlayer;
      console.log(this.cells[index]);

      this.checkWinner();
      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  };

  restartGame = () => {
    this.cells = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
