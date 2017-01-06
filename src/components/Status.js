import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

class Status extends Component {
  render() {
    const inputStyle = {
      width: this.props.size,
      textAlign: 'center',
      margin: 'auto'
    }

    const turn = (this.props.turn === 1) ? 'O' : 'X';
    let text = `${turn}'s Turn`;

    const winner = (this.props.winner === 1) ? 'O' : 'X';
    if (this.props.winner !== 0) {
      text = `${winner} Won!!1!`
    }

    return (
      <FormGroup bsSize="large" style={{margin:'0px'}}>
        <FormControl  type="text"
                      placeholder={text}
                      style={inputStyle} disabled />
      </FormGroup>
    );
  }
}

export default Status;
