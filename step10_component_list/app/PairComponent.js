import React, { Component } from 'react';
import Pair from './Pair';

export class PairComponent extends Component {
    render(){
        return (<div>
                        <span>{this.props.nameValue.name}: </span>
                        <span>{this.props.nameValue.value}</span>
                </div>);
    }

}