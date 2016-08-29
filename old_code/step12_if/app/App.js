import React, { Component } from 'react';


export class App extends Component {

  constructor(){
        super();
        this.a = 5;
        this.b = 4;
        this.myFunction = this.myFunction.bind(this);
    }
    
    myFunction(){
        return true;
    }

  render(){
    return (
      <div>
        {false ? <div>This will not show</div>: null}
        {true ? <div>This will show</div>: null}
        {this.a > this.b ? <div>This will show because 5 is greater then 4</div>: null}
        {this.myFunction() ? <div>This will show because function returns a true value</div>: null}
      </div>
    );
  }
}


