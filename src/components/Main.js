import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import Marker from './Marker'
import MarkerContainer from './MarkerContainer'
import SideMenuButton from './SideMenuButton'
import SideBar from './SideBar';

class Main extends Component {
    state = { 
        markers: [],
        stations: []
    }

    componentDidMount() {
        this.getAllStations()
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
                    this.setState({ stations })
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
        return (
            <main id="content-wrap">
                <SideBar stations={this.state.stations} deviceType={'on-desktop'}/>
                <MapContainer markers={this.state.markers} stations={this.state.stations}/>
                {/* TODO - ADD SideMenuButton AND SideBar HERE
                    <SideMenuButton openState={this.state.sidemenu} onClick={this.onButtonPress}/> 
                    <SideBarContainer openState={this.state.sidemenu} onClick={this.onButtonPress}/>
                */}
            </main>
        )
    }
}

export default Main