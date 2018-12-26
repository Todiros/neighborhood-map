import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import StationInfoBox from './StationInfoBox'
import { getCoord } from '../js/ScreenSize'

class MarkerContainer extends Component {
    state = {
        infoBoxShown: false
    }

    componentWillReceiveProps() {
        this.setState({
            infoBoxShown: false
        })
    }
    
    onMarkerClick = () => {
        this.showInfoBox()
        getCoord()
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
                <StationInfoBox station={this.props.station} isInfoBoxShown={this.state.infoBoxShown}/>
            </span>
        )
    }
}

MarkerContainer.propTypes = {
    station: PropTypes.object.isRequired
}


export default MarkerContainer