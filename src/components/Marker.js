import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StationPin from '../res/img/station-pin-color-blue.svg'
import StationInfoBox from './StationInfoBox'

class Marker extends Component {
    state = {
        hovered: false,
        clicked: false
    }

    componentDidMount() {
        this.setState({
            hovered: false, 
            clicked: false
         })
    }

    handleOnClick = () => {
        this.props.onClick(this)
        this.showInfoBox()
    }

    showInfoBox = () => {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <span>
                <img src={StationPin} width="36px" className='marker' onClick={this.props.onMarkerClick}></img>
                {/* <StationInfoBox isMarkerClicked={this.state.clicked}/> */}
            </span>
        )
    }
}

Marker.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number, 
    title: PropTypes.string, 
    onClick: PropTypes.func
}

export default Marker 