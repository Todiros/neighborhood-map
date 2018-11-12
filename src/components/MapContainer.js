import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import SideMenuButton from './SideMenuButton'
import StationInfoBox from './StationInfoBox'
import { getWindowWidth } from '../js/ScreenWidth'

const MapContainer = props => {
    let { center, zoom } = props.map

    if (getWindowWidth() < 800) {
        center = {
            lat: 42.72,
            lng: 23.35
        }
        zoom = 11
    }

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