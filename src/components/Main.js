import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getAll } from '../js/StationsAPI'
import Marker from './Marker'
import MarkerImage from '../res/img/location-pin-add-2-solid.svg'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            markers: []
        }
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
                image={MarkerImage}
            />
        )

        this.setState({ markers })
    }

    getAllStations() {
        let getAllPromise = new Promise(resolve => { 
            resolve(
                getAll()
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
        return <MapContainer stations={this.state.markers}/>
    }
}

export default Main