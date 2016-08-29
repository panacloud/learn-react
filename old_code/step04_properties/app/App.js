import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
      this.name = 'Zia';
  }



  render(){
 
    return (
      <div> 
        <input value={ "Hello " + this.name}></input>
      </div>
    ); 
  }
}


