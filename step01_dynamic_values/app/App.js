import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
      this.firstname = "Zia";
  }
  render(){
    var lastname = "Khan";
    return (
      <h1>Hello {lastname}, {this.firstname}</h1>
    );
  }
}


