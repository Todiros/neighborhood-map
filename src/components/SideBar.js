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
        const fieldInput = document.getElementsByClassName('station-filter-input')
        let filteredStations = []

        if(this.props.deviceType) {
            filteredStations = this.filterStations(fieldInput[0].value)
        } else {
            filteredStations = this.filterStations(fieldInput[1].value)
        }

        this.setState({ filteredStations })
        this.props.getFilteredStations(filteredStations)
    }

    render () {
        const deviceType = this.props.deviceType || 'on-mobile'
        const stations = this.state.filteredStations.length >= 1 ? this.state.filteredStations : this.props.stations

        return (
            <section className={"side-bar " + deviceType}>
                <header className="logo">
                    <h1>CHARGED<span className="logo-styling">Map</span></h1>
                </header>
                <nav className="stations-list-container">
                    <h2 className="nav-title">Stations List</h2>
                    <ul className="stations-list">
                        {
                            stations.map(station =>
                                <li key={station.id}>
                                    <a className='station-link' href='javascript:void(0)' onClick={this.props.onStationClick.bind(this, station.id)}>{station.title}</a>
                                </li>
                            )
                        }
                    </ul>
                    <div className="filter-wrap">
                        <input className='station-filter-input' type="text" placeholder="NAME / ADDRESS"></input>
                        <button className="button filter-button" onClick={this.onFilterClick}>FILTER</button>
                    </div>
                </nav>
            </section>
        )
    }
}

export default SideBar