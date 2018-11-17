import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StationInfoBox extends Component {
    state = {
        shown: false
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.shown) {
            this.setState({ shown: nextProps.isInfoBoxShown });
        }
    }

    hideInfoBox = () => {
        this.setState({ shown: false })
    }

    render() {
        const displayClass = this.state.shown ?
                                'info-box' :
                                'info-box hidden'

        return (
            <div className={displayClass}>
                <h3 className='info-box-content'>{this.props.station.title}!</h3>

                <button className='info-box-exit-button' onClick={this.hideInfoBox}>CLOSE</button>
            </div>
        )
    }
}

StationInfoBox.propTypes = {
    station: PropTypes.object.isRequired,
    isInfoBoxShown: PropTypes.bool.isRequired
}


export default StationInfoBox 