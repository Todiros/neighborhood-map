import React from 'react'
import ArrowBlack from '../res/img/arrow.svg'
import ArrowBlue from '../res/img/arrow-blue.svg'

const SideMenuButton = props => {
    const arrowImage = props.openState === 'closed' ?
                        ArrowBlack 
                        : ArrowBlue

    return (
        <div id="side-menu-button" onClick={props.onClick}>
            <img src={arrowImage} id={props.openState} width="60px"></img>
        </div>
    )
}

export default SideMenuButton