const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const fields = board.map((player, index) => <Field key={index} player={player} onClick={onClick.bind(null, index)} />)
    return (
      <div className="board">
        {fields}
      </div>
    );
  }
}

module.exports = Board;
