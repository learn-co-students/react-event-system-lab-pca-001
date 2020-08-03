import React from 'react';

export default class KeyPad extends React.Component {

  handleTyping = () => {
    console.log("Entering password...")
  }

  render() {
    return(<input type="password" onKeyUp={this.handleTyping} />)
  }
}