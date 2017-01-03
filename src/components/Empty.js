import React, { Component } from 'react';

const emptyStyle = {
  fill: 'white'
}

class Empty extends Component {
  render() {
    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <rect width={this.props.size} height={this.props.size}
              style={emptyStyle} onClick={this.props.onClick} />
      </g>
    );
  }
}

export default Empty;
