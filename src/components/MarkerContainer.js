import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import StationInfoBox from './StationInfoBox'

class MarkerContainer extends Component {
    state = {
        infoBoxHidden: true
    }

    // componentDidMount() {
    //     this.setState({
    //         hovered: false, 
    //         clicked: false
    //     })
    // }
    
    showInfoBox = () => {
        this.setState({ infoBoxHidden: false })
    }
    
    // handleOnClick = () => {
    //     this.props.onClick(this)
    //     this.showInfoBox()
    // }
    
    onMarkerClick = (marker) => {
        console.log(`The marker (${marker.props.title}) was clicked`)
        this.showInfoBox()
    }

    render() {
        const { lat, lng, title } = this.props.station

        return (
            <span>
                <Marker
                    onMarkerClick={this.onMarkerClick}
                />
                { !this.state.infoBoxHidden ? <StationInfoBox station={this.props.station}/> : null}
            </span>
        )
    }
}

MarkerContainer.propTypes = {
    station: PropTypes.object.isRequired
}


export default MarkerContainer