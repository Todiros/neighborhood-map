import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StationInfoBox extends Component {
    state = {
        shown: false,
        displayData: []
    }

    componentWillMount() {
        this.createDataList()
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.shown) {
            this.setState({ shown: nextProps.isInfoBoxShown });
        }
    }

    hideInfoBox = () => {
        this.setState({ shown: false })
        this.props.onInfoBoxClosing()
    }

    createDataList = () => {
        const { station } = this.props
        let displayData = []

        let stationInfo = {
            town: station.town + ', ' + station.postcode,
            address: station.address,
            coordinates: station.lat.toFixed(2) + ' x ' + station.lng.toFixed(2),
            usageType: station.usageType,
            status: station.isOperational ? 'Working / ' + station.statusTitle : 'Not Working / ' + station.statusTitle,
            connectors: station.connectors.join(', ')
        }

        for (let key in stationInfo) {
            if (stationInfo.hasOwnProperty(key)) {
                displayData.push(<li className='info-box-item' key={key}>{stationInfo[key]}</li>)
            }
        }

        this.setState({ displayData })
    }

    render() {
        const displayClass = this.state.shown ?
                                'info-box' :
                                'info-box hidden'

        const { station } = this.props

        return (
            <div className={displayClass + ' ' + this.props.markerPos}>
                <h3 className='info-box-title'>{station.title}</h3>

                <section className='info-box-content'>
                    {this.state.displayData}
                </section>

                <button className='button info-box-exit-button' onClick={this.hideInfoBox}>CLOSE</button>
            </div>
        )
    }
}

StationInfoBox.propTypes = {
    station: PropTypes.object.isRequired,
    isInfoBoxShown: PropTypes.bool.isRequired
}


export default StationInfoBox 