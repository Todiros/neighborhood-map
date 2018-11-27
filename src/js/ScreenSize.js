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

export { getWindowSize, windowResize }