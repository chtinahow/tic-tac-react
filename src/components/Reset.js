import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Reset extends Component {
  render() {
    const resetStyle = {
      width: this.props.size,
      fontSize: '20px',
      textAlign: 'center'
    }

    return (
      <Button style={resetStyle} bsStyle="warning"
              onClick={this.props.onClick}>Reset</Button>
    );
  }
}

export default Reset;
