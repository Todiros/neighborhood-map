import React, { Component } from 'react'
import MapContainer from './MapContainer'
import { getTest, getAll } from '../js/StationsAPI'
import SideMenuButton from './SideMenuButton'
import SideBarContainer from './SideBarContainer'
import SideBar from './SideBar'

class Main extends Component {
    state = {
        stations: [],
        filteredStations: [],
        sidemenu: 'closed',
        clickedSidebarStation: {id: 0, seed: 0},

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
    
    onStationClick = (lat, lng, id) => {
        this.setState({ clickedSidebarStation: {id, seed: Math.random()} })

        const newMapCenter = {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 11
        }
        this.setState({map: newMapCenter})
        this.setState({sidemenu: 'closed'})
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
                })
            } catch (e) {}
        }
        
        asyncGet()
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
                <SideBar 
                    stations={this.state.stations} 
                    deviceType={'on-desktop'} 
                    onStationClick={this.onStationClick} 
                    getFilteredStations={this.getFilteredStations}/>

                <MapContainer
                    stations={this.state.stations} 
                    filteredStations={this.state.filteredStations} 
                    map={this.state.map} 
                    clickedStationId={this.state.clickedSidebarStation}/>

                <SideMenuButton 
                    openState={this.state.sidemenu} 
                    onClick={this.onButtonPress}/>

                <SideBarContainer 
                    openState={this.state.sidemenu} 
                    stations={this.state.stations} 
                    onStationClick={this.onStationClick}
                    getFilteredStations={this.getFilteredStations}/>
            </main>
        )
    }
}

export default Main