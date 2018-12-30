import React, { Component } from 'react'

class SideBar extends Component {
    state = {
        filteredStations: []
    }

    filterStations = (filter) => {
        let stationsList = []
        
        stationsList = this.props.stations.filter(station => {
            if (filter) {
                if (station.title.toLowerCase().includes(filter.toLowerCase())) {
                    return station
                }
            } else {
                return  station
            }
        })

        return stationsList
    }

    onFilterClick = () => {
        const fieldInput = document.getElementById('station-filter-input').value
        const filteredStations = this.filterStations(fieldInput)

        this.setState({ filteredStations })
    }

    render () {
        const deviceType = this.props.deviceType || 'on-mobile'
        const stations = this.state.filteredStations.length >= 1 ? this.state.filteredStations : this.props.stations

        return (
            <section id="side-bar" className={deviceType}>
                <header id="logo">
                    <h1>CHARGED<span className="logo-styling">Map</span></h1>
                </header>
                <nav id="stations-list-container">
                    <h2 className="nav-title">Stations List</h2>
                    <ul className="stations-list">
                        {
                            stations.map(station =>
                                <li key={station.lat + station.lng}>
                                    <a className='station-link' href='javascript:void(0)'>{station.title}</a>
                                </li>
                            )
                        }
                    </ul>
                    <div className="filter-wrap">
                        <input id='station-filter-input' type="text" placeholder="NAME / ADDRESS"></input>
                        <button className="button filter-button" onClick={this.onFilterClick}>FILTER</button>
                    </div>
                </nav>
            </section>
        )
    }
}

export default SideBar