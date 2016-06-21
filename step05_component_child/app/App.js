import React, { Component } from 'react';
import {Child} from './Child'


export class App extends Component {
  constructor(){
      super();
  }



  render(){
 
    return (
      <div> 
        This is from the Root Component
        <Child></Child>
      </div>
    ); 
  }
}


