import React, { Component } from 'react';

import Empty from './Empty';
import P1 from './P1';
import P2 from './P2';

const boardStyle = {
  margin: '20px'
}

class Board extends Component {
  render() {
    const squares = this.props.board.map((row, y) => {
      return row.map((square, x) => {
        const squareSize = this.props.size/3;
        switch(square){
          case 2:
            return <P2  size={squareSize - 10}
                        key={`${x},${y}`}
                        x={(squareSize*x)+5} y={(squareSize*y)+5} />
          case 1:
            return <P1  size={squareSize - 10}
                        key={`${x},${y}`}
                        x={(squareSize*x)+5} y={(squareSize*y)+5} />
          case 0:
          default:
            return <Empty size={squareSize - 10}
                          key={`${x},${y}`}
                          x={(squareSize*x)+5} y={(squareSize*y)+5}
                          onClick={this.props.onEmptySpaceClick.bind(this, {x: x,y: y})} />
        }
      });
    });

    const squareSVGs = [].concat.apply([], squares);
    // flatten array using [].concat.apply

    return (
      <svg  width={this.props.size} height={this.props.size}
            style={Object.assign({}, boardStyle, this.props.style)}>
        <line x1={this.props.size/3} y1="0"
              x2={this.props.size/3} y2={this.props.size}
              strokeWidth="5" stroke="black" />
        <line x1={(this.props.size*2)/3} y1="0"
              x2={(this.props.size*2)/3} y2={this.props.size}
              strokeWidth="5" stroke="black" />
        <line x1="0"                y1={this.props.size/3}
              x2={this.props.size}  y2={this.props.size/3}
              strokeWidth="5" stroke="black" />
        <line x1="0"                y1={(this.props.size*2)/3}
              x2={this.props.size}  y2={(this.props.size*2)/3}
              strokeWidth="5" stroke="black" />
        {squareSVGs}
      </svg>
    );
  }
}

export default Board;
