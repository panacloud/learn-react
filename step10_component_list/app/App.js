import React, { Component } from 'react';
import {Pair} from './Pair';
import {PairComponent} from './PairComponent';

export class App extends Component {
  constructor(){
      super();
      this.pairs = [
            new Pair("cotton", 6),
            new Pair("food", 9)
        ];
      
  }



  render(){
    let list = this.pairs.map((pair)=> {
      return <PairComponent nameValue={pair}></PairComponent> 
    });
    
    return (
      <div> 
        This is from the Root Component
        {list}
      </div>
    ); 
  }
}


