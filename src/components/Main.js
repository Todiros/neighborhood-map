import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import Marker from './Marker'
import MarkerContainer from './MarkerContainer'

class Main extends Component {
    state = { markers: []}

    componentDidMount() {
        this.getAllStations()
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
                    this.setMarkerContainer(stations)
                })
            } catch (e) {}
        }

        asyncGet()
    }
 
    setMarkers(stationsArr) {
        const markers = stationsArr.map(station =>
            <Marker key={station.lat + station.lng}
                lat={station.lat}
                lng={station.lng}
                title={station.title}
                onClick={this.onMarkerClick}
            >
            </Marker>
        )

        this.setState({ markers })
    }

    setMarkerContainer(stationsArr) {
        const markers = stationsArr.map(station =>
            <MarkerContainer 
                key={station.lat + station.lng} 
                lat={station.lat}
                lng={station.lng}
                station={station}
            />
        )

        this.setState({ markers })
    }

    render() {
        return <MapContainer markers={this.state.markers}/>
    }
}

export default Main