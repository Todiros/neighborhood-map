import React from 'react'
import PropTypes from 'prop-types'

const Map = props => {
    return <h1>{props.welcomeText}</h1>
}

Map.propTypes = {
    welcomeText: PropTypes.string.isRequired
};

export default Map