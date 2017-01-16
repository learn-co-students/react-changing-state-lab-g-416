const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;

    return (
      <div className="status">
        { winner === undefined ? <h2>Tie</h2> : <h2>{winner} wins</h2>}
      </div>
    );
  }
}

module.exports = Status;
