import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import { getMapCenter } from '../js/getMapCenter'
import MarkerContainer from './MarkerContainer'

class MapContainer extends Component {
    apiIsLoaded = map => {
        map.panTo(this.props.map.center)
    }

    createMarkers(stationsArr) {
        const stations = 
            this.props.filteredStations.length == 0 ? 
                stationsArr :
            (stationsArr != this.props.filteredStations) ? 
                this.props.filteredStations : 
            stationsArr

        const markers = stations.map(station => {
                return <MarkerContainer
                    key={station.id} 
                    lat={station.lat}
                    lng={station.lng}
                    station={station}
                    clickedStationId={this.props.clickedStationId}
                />
            }
        )

        return markers
    }

    render() {
        let { map } = this.props
        map = getMapCenter(map)

        return (
            <div id="map">
                <GoogleMap
                    bootstrapURLKeys={{key: googleMapsKey}}
                    center={map.center}
                    defaultZoom={map.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => this.apiIsLoaded(map)}
                >
                    {this.createMarkers(this.props.stations)}
                </GoogleMap>
            </div>
        )
    }
}

MapContainer.propTypes = {
    stations: PropTypes.array.isRequired,
    filteredStations: PropTypes.array.isRequired,
    clickedStationId: PropTypes.object.isRequired,
    map: PropTypes.object.isRequired
}

export default MapContainer