import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StationPin from '../res/img/station-pin-color-blue.svg'

class Marker extends Component {
    render() {
        return (
            <span>
                <img src={StationPin} width="36px" className='marker' onClick={this.props.onMarkerClick}></img>
            </span>
        )
    }
}

Marker.propTypes = {
    onMarkerClick: PropTypes.func
}

export default Marker 