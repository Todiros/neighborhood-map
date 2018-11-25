import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import SideMenuButton from './SideMenuButton'
import { getWindowSize } from '../js/ScreenWidth'

const MapContainer = props => {
    let { map } = props
    const windowSize = getWindowSize()

    const setMapCenter = (lat = 42.72, lng = 23.35, zoom = 11) => {
        return {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: zoom
        }
    }

    windowSize.width > windowSize.height ?
        windowSize.width > 1100 ?
            map = setMapCenter(42.73, 25.49, 8)
        : windowSize.width > 1800 ? 
            map = setMapCenter(42.73, 25.49, 13)
        : null
    : windowSize.width > 860 ?
        map = setMapCenter(42.71, 23.33, 12)
        : null

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