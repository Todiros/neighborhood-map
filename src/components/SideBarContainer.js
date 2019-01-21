import React, { Component } from 'react'
import SideBar from './SideBar'
import PropTypes from 'prop-types'

class SideBarContainer extends Component {
    render () {
        return (
            <aside id='side-bar-container' className={'mobile side-bar-' + this.props.openState}>
                <SideBar 
                    stations={this.props.stations} 
                    onStationClick={this.props.onStationClick}
                    getFilteredStations={this.props.getFilteredStations}/>
            </aside>
        )
    }
}

SideBarContainer.propTypes = {
    stations: PropTypes.array.isRequired,
    deviceType: PropTypes.string,
    onStationClick: PropTypes.func.isRequired,
    getFilteredStations: PropTypes.func.isRequired
}

export default SideBarContainer