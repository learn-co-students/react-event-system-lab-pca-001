// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  constructor(props) {
    super(props);
  }

  doit = (event) => console.log('Entering password...');

  render() {
    return <div><input onKeyUp={this.doit} type="password"/></div>
  }
}