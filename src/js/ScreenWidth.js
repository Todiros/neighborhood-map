const getWindowSize = () => {
    return {width: window.innerWidth, height: window.innerHeight}
}

// Dynamically update map center based on screen width
const windowResize = () => {
    window.addEventListener('resize', () => {
        return window.innerWidth
    })
}

export { getWindowSize, windowResize }