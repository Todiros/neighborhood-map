import React, { Component } from 'react'
import MapContainer from './MapContainer'
import objArr from '../res/objArr'
import tempObj from '../res/tempObj'
import Station from '../js/StationsAPI'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            station: {},
        }
    }

    componentDidMount() {
        const station = new Station(tempObj).GetAddressInfo()
        this.setState({ station })
    }

    render() {
        return <MapContainer station={this.state.station}/>
    }
}

export default Main