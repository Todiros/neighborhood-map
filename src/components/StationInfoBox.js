import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StationInfoBox extends Component {
    state = {
        displayInfoBox: true
    }

    // handleClick = () => {
    //     this.props.onClick(this)
    //     this.state.displayInfoBox ? 
    //         this.hideInfoBox() :
    //         this.showInfoBox()
    // }

    hideInfoBox = () => {
        this.setState({ displayInfoBox: false})
    }

    // showInfoBox = () => {
    //     this.setState({ displayInfoBox: true})
    // }

    render() {
        const displayClass = this.state.displayInfoBox ?
                                'info-box' :
                                'info-box hidden'

        return (
            <div className={displayClass}>
                <h1>TOOLTIP YAY!</h1>
                <button className='info-box-exit-button' onClick={this.hideInfoBox}>CLOSE</button>
            </div>
        )
    }
}

// StationInfoBox.propTypes = {

// }


export default StationInfoBox 