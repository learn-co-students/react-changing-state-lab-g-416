const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    });
  }

  handleClick (i, ev) {
    ev.preventDefault();
    this.setState({
      board: this.state.board.map((player, index) => index === i ? this.state.turn : player ),
      turn: this.state.turn === 'X' ? 'O' : 'X'
    });

  }

  getWinner () {
    const results = solutions.map(
      solution => solution.map(i => this.state.board[i]).join('')
    );
    const match = results.find(result => ['XXX', 'OOO'].includes(result));
    return match && match[0];
  }

  isComplete () {
    return this.state.board.every(player => ['X', 'O'].includes(player)) || !!this.getWinner();
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className="game__reset" onClick={this.handleReset}></button>
      </div>
    );
  }
}

module.exports = Game;
