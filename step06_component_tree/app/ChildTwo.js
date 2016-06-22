import React, { Component } from 'react';
import {SubChild} from './SubChild';


export class ChildTwo extends Component {
  constructor(){
      super();
  }

  render(){
 
    return (
      <div> 
        This is from the Child Two component
        <SubChild></SubChild>
      </div>
    ); 
  }
}