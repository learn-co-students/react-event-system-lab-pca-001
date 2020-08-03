import React, { Component } from 'react';

export default class Keypad extends React.Component {

  constructor(props) {
    super()
  }

  handleInput = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInput}/>
      </div>
    )
  }

}
