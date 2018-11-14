import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import StationInfoBox from './StationInfoBox'

class MarkerContainer extends Component {
    state = {
        hovered: false,
        clicked: false
    }

    onMarkerClick = (marker) => {
        console.log(`The marker (${marker.props.title}) was clicked`)
    }

    componentDidMount() {
        this.setState({
            hovered: false, 
            clicked: false
         })
    }

    showInfoBox = () => {
        this.setState({ clicked: true })
    }

    handleOnClick = () => {
        this.props.onClick(this)
        this.showInfoBox()
    }

    render() {
        const { lat, lng, title } = this.props.station

        return (
            <span>
                <Marker
                    lat={lat}
                    lng={lng}
                    title={title}
                />
                <StationInfoBox station={this.props.station} onClick={this.onMarkerClick}/>
            </span>
        )
    }
}

MarkerContainer.propTypes = {
    station: PropTypes.object.isRequired
}


export default MarkerContainer