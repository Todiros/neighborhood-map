import React, { Component } from 'react'
import Map from './Map'
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            welcomeText: '',
            chargingStations: []
        }
    }

    render() {
        return (
            <div id="map">
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyC-fbL8k788p_nYsqgPxmF9n4fniFySlZA'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent 
                        lat={this.props.station.lat}
                        lng={this.props.station.lng}
                        text={this.props.station.title}
                    />
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