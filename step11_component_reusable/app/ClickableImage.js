import React, { Component, PropTypes } from 'react';

export class ClickableImage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.clickCallback();
    }

    render(){
        return (<div>
                    <img src={this.props.url} width="100px" height="100px" onClick={this.handleClick}></img>
               </div>);
    }

}

ClickableImage.propTypes = {
    url: PropTypes.string.isRequired,
    clickCallback: PropTypes.func
}