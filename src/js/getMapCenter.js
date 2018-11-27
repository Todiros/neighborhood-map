import { getWindowSize } from './ScreenSize'

const setMapCenter = (lat, lng, zoom) => {
    return {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: zoom
    }
}

const getMapCenter = (map) => {
    const windowSize = getWindowSize()

    /* Widescreen Desktop */
    windowSize.width > windowSize.height ?
        windowSize.width > 1100 ?
            map = setMapCenter(42.73, 25.49, 8) // set the center to the whole country
        : windowSize.width > 1800 ? 
            map = setMapCenter(42.73, 25.49, 13) // for wide screen, zoom further
        : null
    /* High-Res Mobile */
    : windowSize.width > 860 ?
        map = setMapCenter(42.71, 23.33, 12) // set the center to the capital city and zoom in
        : null // otherwise use the default center and zoom

    return map
}

export { getMapCenter }