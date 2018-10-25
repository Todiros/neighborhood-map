import React, { Component } from 'react'

class Marker extends Component {
    render() {
        return <img src={this.props.image} className='marker'></img>
    }
}

export default Marker