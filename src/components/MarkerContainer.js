import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import StationInfoBox from './StationInfoBox'
import { getMapCoords } from '../js/ScreenSize'

class MarkerContainer extends Component {
    state = {
        infoBoxShown: false,
        markerPos: '',
        clickedId: 0
    }

    componentWillReceiveProps(nextProps) {
        const { clickedSidebarStation, station } = this.props
        const { clickedId } = this.state

        if (clickedId == 0) {
            if (clickedSidebarStation.seed != nextProps.clickedSidebarStation.seed) {
                if (nextProps.clickedSidebarStation.id == station.id)
                    this.setState({ clickedId: station.id })
            } else {
                this.setState({ infoBoxShown: false })
            }
        } 
        
        if (clickedId != 0 && clickedId == clickedSidebarStation.id) {
            this.setState({ infoBoxShown: true })
        }
    }

    onInfoBoxClosing = () => {
        this.setState({ clickedId: 0 })
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
                    onMarkerClick={this.onMarkerClick}/>
                
                <StationInfoBox 
                    station={this.props.station} 
                    isInfoBoxShown={this.state.infoBoxShown} 
                    markerPos={this.state.markerPos}
                    onInfoBoxClosing={this.onInfoBoxClosing}/>
            </span>
        )
    }
}

MarkerContainer.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    station: PropTypes.object.isRequired,
    clickedSidebarStation: PropTypes.object.isRequired,

}


export default MarkerContainer