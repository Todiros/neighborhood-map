import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import StationInfoBox from './StationInfoBox'
import { getMapCoords } from '../js/ScreenSize'

class MarkerContainer extends Component {
    state = {
        infoBoxShown: false,
        markerPos: ''
    }

    componentWillReceiveProps() {
        this.setState({ infoBoxShown: false })
    }
    
    onMarkerClick = (e) => {
        const mapCoords = getMapCoords()
        let markerPos = ''

        if (e.clientX + 220 > mapCoords.right) {
            markerPos += 'left'
        }
        
        if (e.clientY + 320 > mapCoords.bottom) {
            markerPos ? markerPos += ' top'  : markerPos = 'top'
        }

        markerPos != this.state.markerPos ?
            this.setState({ markerPos }) : null

        this.showInfoBox()
    }

    showInfoBox = () => {
        this.setState({ infoBoxShown: true })
    }

    render() {
        return (
            <span>
                <Marker
                    onMarkerClick={this.onMarkerClick}
                />
                <StationInfoBox station={this.props.station} isInfoBoxShown={this.state.infoBoxShown} markerPos={this.state.markerPos}/>
            </span>
        )
    }
}

MarkerContainer.propTypes = {
    station: PropTypes.object.isRequired
}


export default MarkerContainer