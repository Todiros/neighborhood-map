import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            welcomeText: '',
            chargingStations: []
        }
    }

    componentDidMount() {
        // this.setState({ chargingStations })
        this.setState( {welcomeText: 'Welcome To Webpack & React!'} )
    }

    render() {
        return (
            <Map welcomeText={this.state.welcomeText}/>
        )
    }
}

export default MapContainer