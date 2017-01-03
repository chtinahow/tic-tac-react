import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Board from '../components/Board';
import Status from '../components/Status';
import Reset from '../components/Reset';

import { claim, resetBoard } from '../reducers/boardState';

const appStyle = {
  textAlign: 'center'
}

const appHeader = {
  backgroundColor: '#222',
  padding: '20px'
}

class App extends Component {

  onEmptySpaceClick(coord) {
    const { dispatch } = this.props;
    dispatch(claim(coord));
  }

  onResetClick() {
    const { dispatch } = this.props;
    dispatch(resetBoard());
  }

  render() {
    return (
      <div style={appStyle}>
        <div style={appHeader}>
          <h2>Tic Tac React</h2>
        </div>
        <div>
          <Board size={400} board={this.props.boardState.board}
            onEmptySpaceClick={this.onEmptySpaceClick.bind(this)}/>
        </div>
        <div>
          <Status size={400} turn={this.props.boardState.turn} />
        </div>
        <div>
          <Reset  size={400}
                  onClick={this.onResetClick.bind(this)} />
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    boardState: state.boardState
  };
}

export default connect(select)(App);
