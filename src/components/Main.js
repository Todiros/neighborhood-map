import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import MarkerContainer from './MarkerContainer'
import SideMenuButton from './SideMenuButton'
import SideBarContainer from './SideBarContainer'
import SideBar from './SideBar'

class Main extends Component {
    state = {
        markers: [],
        stations: [],
        filteredStations: [],
        sidemenu: 'closed',
        clickedSidebarStationId: 0,

        map: {
            center: {
                lat: 42.72,
                lng: 23.35
            },
            zoom: 11
        }
    }
    
    componentDidMount() {
        this.getAllStations()
    }
    
    getFilteredStations = (filteredStations) => {
        this.setState({ filteredStations })
    }
    
    onStationClick = (lat, lng) => {
        this.setState({clickedSidebarStationId: lat + lng})

        const newMapCenter = {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 11
        }
        this.setState({map: newMapCenter})
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
        const stations = stationsArr != this.state.filteredStations ? stationsArr : this.state.filteredStations

        const markers = stations.map(station => {
                if (station.id == this.state.clickedSidebarStationId) {
                    return <MarkerContainer
                        key={station.id} 
                        lat={station.lat}
                        lng={station.lng}
                        station={station}
                        clickedId={this.state.clickedSidebarStationId}
                    />
                } else {
                    return <MarkerContainer 
                        key={station.id} 
                        lat={station.lat}
                        lng={station.lng}
                        station={station}
                    />
                }
            }
        )

        this.setState({ markers })
    }

    onButtonPress = (e) => {
        e.preventDefault()

        this.state.sidemenu === 'closed' ? 
            this.setState({ sidemenu: 'opened' })
        : this.setState({ sidemenu: 'closed' })
    }
    

    render() {
        return (
            <main id="content-wrap">
                <SideBar stations={this.state.stations} deviceType={'on-desktop'} onStationClick={this.onStationClick} getFilteredStations={this.getFilteredStations}/>
                <MapContainer markers={this.state.markers} stations={this.state.stations} map={this.state.map}/>
                <SideMenuButton openState={this.state.sidemenu} onClick={this.onButtonPress}/>
                <SideBarContainer openState={this.state.sidemenu} stations={this.state.stations} onStationClick={this.onStationClick}/>
            </main>
        )
    }
}

export default Main