import React from 'react'
import PropTypes from 'prop-types'

const Marker = props => {
    return <img src={props.image} className='marker'></img>
}

Marker.propTypes = {
    image: PropTypes.string.isRequired
}

export default Marker 