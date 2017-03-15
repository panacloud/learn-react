import React, { Component } from 'react';


class ChildCom extends Component {
  render() {
    return (
      <div>
        Tea with {this.props.with}
      </div>
    );
  }
}

export default ChildCom;
