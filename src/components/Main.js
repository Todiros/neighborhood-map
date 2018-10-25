import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getAllStations } from '../js/StationsAPI'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            stations: []     
        }
    }

    componentDidMount() {
        this.setState({ stations: getAllStations() })
    }
 
    render() {
        return <MapContainer stations={this.state.stations}/>
    }
}

export default Main