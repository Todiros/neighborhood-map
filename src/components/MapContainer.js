import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'

class MapContainer extends Component {
    render() {
        return (
            <div id="map">
                <GoogleMap
                    bootstrapURLKeys={{key: googleMapsKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.stations}
                </GoogleMap>
            </div>
        )
    }
}

MapContainer.defaultProps = {
    center: {
        lat: 42.73,
        lng: 25.49
    },
    zoom: 8
}

export default MapContainer