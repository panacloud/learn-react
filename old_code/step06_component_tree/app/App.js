import React, { Component } from 'react';
import {ChildOne} from './ChildOne';
import {ChildTwo} from './ChildTwo';


export class App extends Component {
  constructor(){
      super();
  }



  render(){
 
    return (
      <div> 
        This is from the Root Component
        <ChildOne></ChildOne>
        <ChildTwo></ChildTwo>
      </div>
    ); 
  }
}


