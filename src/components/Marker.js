import React from 'react'
import PropTypes from 'prop-types'
import StationPin from '../res/img/station-pin-color-blue.svg'

const Marker = props => {
    return <img src={StationPin} width="36px" className='marker'></img>
}

Marker.propTypes = {
    image: PropTypes.string
}

export default Marker 