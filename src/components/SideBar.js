import React, { Component } from 'react'

class SideBar extends Component {
    render () {
        console.log(this.props.openState)
        return <div id='mobile-side-bar' className={'side-bar-' + this.props.openState} onClick={this.props.onClick}>.</div>
    }
}

export default SideBar