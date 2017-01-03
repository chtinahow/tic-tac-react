import React, { Component } from 'react';

class P2 extends Component {
  render() {
    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <line x1={0} y1={this.props.size}
              x2={this.props.size} y2={0}
              strokeWidth={5}
              stroke='black'
              onClick={this.props.onClick} />
        <line x1={0} y1={0}
              x2={this.props.size} y2={this.props.size}
              strokeWidth={5}
              stroke='black'
              onClick={this.props.onClick} />
      </g>
    );
  }
}

export default P2;
