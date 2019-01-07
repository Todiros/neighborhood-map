import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import MarkerContainer from './MarkerContainer'
import SideMenuButton from './SideMenuButton'
import SideBarContainer from './SideBarContainer'
import SideBar from './SideBar';

class Main extends Component {
    state = { 
        markers: [],
        stations: [],
        sidemenu: 'closed',
        clickedSidebarStationId: 0 
    }

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
                    this.setState({ stations })
                    this.setMarkerContainer(stations)
                })
            } catch (e) {}
        }

        asyncGet()
    }

    setMarkerContainer(stationsArr) {
        const markers = stationsArr.map(station =>
            <MarkerContainer 
                key={station.id} 
                lat={station.lat}
                lng={station.lng}
                station={station}
                clickedId={this.state.clickedSidebarStationId}
            />
        )

        this.setState({ markers })
    }

    onButtonPress = (e) => {
        e.preventDefault()

        this.state.sidemenu === 'closed' ? 
            this.setState({ sidemenu: 'opened' })
        : this.setState({ sidemenu: 'closed' })
    }

    onStationClick = (id) => {
        this.state.stations.forEach(station => {
            if (id == station.id)
                this.setState({ clickedSidebarStationId: station.id })
        })
    }

    render() {
        return (
            <main id="content-wrap">
                <SideBar stations={this.state.stations} deviceType={'on-desktop'} onStationClick={this.onStationClick}/>
                <MapContainer markers={this.state.markers} stations={this.state.stations}/>
                <SideMenuButton openState={this.state.sidemenu} onClick={this.onButtonPress}/>
                <SideBarContainer openState={this.state.sidemenu} stations={this.state.stations} onStationClick={this.onStationClick}/>
            </main>
        )
    }
}

export default Main