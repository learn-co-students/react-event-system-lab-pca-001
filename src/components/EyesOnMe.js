// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  constructor(props) {
    super(props);
  }

  f = (event) => console.log('Good!');
  b = (event) => console.log('Hey! Eyes on me!');

  render() {
    const {f,b} = this;
    return <button onFocus={f} onBlur={b}/>
  }
}