import React from 'react';

export default class EyesOnMe extends React.Component {

  lookingAtMe = () => {
    console.log("Good!")
  }

  lookingAway = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return(
      <button onFocus={this.lookingAtMe} onBlur={this.lookingAway}>
      </button>
    )
  }
}