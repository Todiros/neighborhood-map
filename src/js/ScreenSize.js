const getWindowSize = () => {
    return {width: window.innerWidth, height: window.innerHeight}
}

/* Get the screen size on screen resize 
TODO: optimize performance with a setTimeout func
Needs polyfill for IE
*/ 
const windowResize = () => {
    window.addEventListener('resize', () => {
        return {width: window.innerWidth, height: window.innerHeight}
    })
}

const getMapCoords = () =>  {
    const map = document.getElementById('map')
    const coords = map.getBoundingClientRect()
    
    return coords
}

export { getWindowSize, windowResize, getMapCoords }