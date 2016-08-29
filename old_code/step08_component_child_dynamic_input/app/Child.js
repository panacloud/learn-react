import React, { Component } from 'react';


export class Child extends Component {
  constructor(){
      super();
      this.state = {data: 0};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data
    });
    console.log(nextProps);
    console.log(this);
  }

  render(){
 
    return (
      <div> 
        This is from the Child component
        <div>{this.state.data}</div>
      </div>
    ); 
  }
}