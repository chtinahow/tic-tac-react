import React, { Component } from 'react';

const p1Style = {
  fill: 'white'
}

class P1 extends Component {
  render() {
    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <circle cx={this.props.size/2}
                cy={this.props.size/2}
                r={this.props.size/2}
                style={p1Style}
                strokeWidth={5}
                stroke='black' />
      </g>
    );
  }
}

export default P1;
