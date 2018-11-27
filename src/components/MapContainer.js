import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import SideMenuButton from './SideMenuButton'
import { getMapCenter } from '../js/getMapCenter'

const MapContainer = props => {
    let { map } = props

    map = getMapCenter(map)

    return (
        <div id="map">
            <GoogleMap
                bootstrapURLKeys={{key: googleMapsKey}}
                defaultCenter={map.center}
                defaultZoom={map.zoom}
            >
                {props.markers}
            </GoogleMap>
            <SideMenuButton />
        </div>
    )
}

MapContainer.defaultProps = {
    map: {
        center: {
            lat: 42.72,
            lng: 23.35
        },
        zoom: 11
    }
}

MapContainer.propTypes = {
    markers: PropTypes.array.isRequired
}

export default MapContainer