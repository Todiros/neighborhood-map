import React, { Component } from 'react'

class SideBar extends Component {
    render () {
        const deviceType = this.props.deviceType || 'on-mobile'

        return (
            <section id="side-bar" className={deviceType}>
                <header id="logo">
                    <h1>CHARGED<span className="logo-styling">Map</span></h1>
                </header>
                <nav id="stations-list-container">
                    <h2 className="nav-title">Stations List</h2>
                    <ul className="stations-list">
                        {this.props.stations.map(station => 
                            <li key={station.lat + station.lng}>
                                <a className='station-link' href='javascript:void(0)'>{station.title}</a>
                            </li>
                        )}
                    </ul>
                    <div className="filter-wrap">
                        <input type="text" placeholder="NAME / ADDRESS"></input>
                        <button className="button filter-button">FILTER</button>
                    </div>
                </nav>
            </section>
        )
    }
}

export default SideBar