import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import Marker from './Marker'

class Main extends Component {
    state = {
        markers: []
    }

    componentDidMount() {
        this.getAllStations()
    }

    setMarkers(stationsArr) {
        const markers = stationsArr.map(station =>
            <Marker key={station.lat + station.lng}
                lat={station.lat}
                lng={station.lng}
                title={station.title}
            />
        )

        this.setState({ markers })
    }

    getAllStations() {
        let getAllPromise = new Promise(resolve => { 
            resolve(
                getTest()
            )
        })

        const asyncGet = async () => {
            try{
                await getAllPromise.then(stations => {
                    this.setMarkers(stations)
                })
            } catch (e) {}
        }

        asyncGet()
    }
 
    render() {
        return <MapContainer markers={this.state.markers}/>
    }
}

export default Main