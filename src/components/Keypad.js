import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {
    return (
      <input
      type="password"
      onKeyUp={this.handleKeyUp}>
      </input>
    )
  }

  handleKeyUp() {
    console.log("Entering password...")
  }
}