import React from 'react'
import ArrowImage from '../res/img/arrow.svg'

const SideMenuButton = () => {
    return (
        <div id="side-menu-button">
            <img src={ArrowImage} className="arrow" width="60px"></img>
        </div>
    )
}

export default SideMenuButton