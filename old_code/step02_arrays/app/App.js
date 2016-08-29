import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
      this.names = ['Zia', 'Hira', 'Inam', 'Rehan', 'Tauha'];
  }
  render(){
    var listItems = this.names.map(function(name) {
      return (
        <li> 
          {name}
        </li> 
      ); 
    }); 
 
    return (
      <div> 
        <ul> 
          {listItems} 
        </ul> 
      </div> 
    ); 
  }
}


