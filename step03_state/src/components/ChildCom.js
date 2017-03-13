import React, { Component } from 'react';


class ChildCom extends Component {
  render() {
    return (
      <div>
        Tea with {this.props.with}
        <br/>
        Quanitity : {this.props.quantity}
      </div>
    );
  }
}

export default ChildCom;
