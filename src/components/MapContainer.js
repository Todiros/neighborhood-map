import React from 'react'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import PropTypes from 'prop-types'

const MapContainer = props => {
    const { center, zoom } = props.map

    return (
        <div id="map">
            <GoogleMap
                bootstrapURLKeys={{key: googleMapsKey}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {props.markers}
            </GoogleMap>
        </div>
    )
}

MapContainer.defaultProps = {
    map: {
        center: {
            lat: 42.73,
            lng: 25.49
        },
        zoom: 8
    }
}

MapContainer.propTypes = {
    markers: PropTypes.array.isRequired
}

export default MapContainer