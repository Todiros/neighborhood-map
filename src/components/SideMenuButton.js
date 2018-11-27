import React from 'react'
import ArrowImage from '../res/img/arrow.svg'

const SideMenuButton = props => {
    console.log(props.openState)
    return (
        <div id="side-menu-button" onClick={props.onClick}>
            <img src={ArrowImage} id={props.openState} width="60px"></img>
        </div>
    )
}

export default SideMenuButton