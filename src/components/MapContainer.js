import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { googleMapsKey } from '../js/API_Keys'
import SideMenuButton from './SideMenuButton'
import { getMapCenter } from '../js/getMapCenter'
import SideBar from './SideBar';

class MapContainer extends Component {
    state = {
        sidemenu: 'closed'
    }

    onButtonPress = () => {
        this.state.sidemenu === 'closed' ? 
            this.setState({ sidemenu: 'opened' })
        : this.setState({ sidemenu: 'closed' })
    }

    render() {
        let { map } = this.props
        map = getMapCenter(map)

        return (
            <div id="map">
                <GoogleMap
                    bootstrapURLKeys={{key: googleMapsKey}}
                    defaultCenter={map.center}
                    defaultZoom={map.zoom}
                >
                    {this.props.markers}
                </GoogleMap>
                <SideMenuButton openState={this.state.sidemenu} onClick={this.onButtonPress}/>
                <SideBar openState={this.state.sidemenu} onClick={this.onButtonPress}/>
            </div>
        )
    }
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