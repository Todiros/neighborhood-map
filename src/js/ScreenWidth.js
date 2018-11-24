const getWindowWidth = () => {
    return window.innerWidth
}

const windowResize = () => {
    window.addEventListener('resize', () => {
        console.log(window.innerWidth)
    })
}

export { getWindowWidth, windowResize }