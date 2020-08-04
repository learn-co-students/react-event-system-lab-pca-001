import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {

  constructor(props) {
    super()
  }

  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }


  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      </div>
    )
  }

}