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
    }

    createDataList = () => {
        const { station } = this.props
        let displayData = []

        for (let key in station) {
            if (station.hasOwnProperty(key) && key != 'title') {
                displayData.push(<li className='info-box-item' key={key}>{station[key]}</li>)
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
            <div className={displayClass}>
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