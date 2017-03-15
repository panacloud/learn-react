import React, { Component } from 'react';

class ChildCom extends Component {

  proceed() {
    this.props.handle("Tea with " + this.refs.name.value)
  }

  render() {
    return (
      <div>
        Tea with <input type="text" ref="name" />
        <button onClick={this.proceed.bind(this)}>Click</button>
        {/*we can also bind methods on the fly and 'class this' will become available in the method*/}
      </div>
    );
  }
}

export default ChildCom;
