import React, { Component } from 'react'
import SideBar from './SideBar'

class SideBarContainer extends Component {
    render () {
        return (
            <aside id='side-bar-container' className={'mobile side-bar-' + this.props.openState}>
                <SideBar stations={this.props.stations} onStationClick={this.props.onStationClick}/>
            </aside>
        )
    }
}

export default SideBarContainer