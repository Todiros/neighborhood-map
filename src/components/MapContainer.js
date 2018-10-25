import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import MarkerImage from '../res/img/location-pin-add-2-solid.svg'

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            stations: []
        }
    }

    setMarkers(stations) {
        let markers = []

        Array.prototype.forEach.call(stations, station => {

            markers.push(
            <Marker key={station.lat + station.lng}
                lat={station.lat}
                lng={station.lng}
                title={station.title}
                image={MarkerImage}
            />)
        })

        return markers
    }

    render() {
        return (
            <div id="map">
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyC-fbL8k788p_nYsqgPxmF9n4fniFySlZA'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.setMarkers(this.props.stations)}
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