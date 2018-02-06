const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div classname='board'>
        {board.map((player, i) =>
          <Field key={i} player={player} onclick={onClicj.bind(null, i)} />
        )
      }
      </div>
    );
  }
}

module.exports = Board;
