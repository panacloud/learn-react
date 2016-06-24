import React, { Component } from 'react';
import {ClickableImage} from './ClickableImage';

export class App extends Component {
  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert("Image has been clicked");
  }

  render(){
    return (
      <div> 
        This is from the Root Component, click the image
        <ClickableImage url="./../assets/pakistan.png" clickCallback={this.handleClick}></ClickableImage>
      </div>
    ); 
  }
}


