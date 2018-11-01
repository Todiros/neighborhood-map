import objArr from '../res/objArr'
import { openChargeKey } from './API_Keys'

class Station {
    constructor({AddressInfo}) {
        let {
            Title: title, 
            AddressLine1: address, 
            Longitude: lng,
            Latitude: lat
        } = AddressInfo
        this.title = title || 'NA'
        this.address = address || 'NA'
        this.lng = lng || 0
        this.lat = lat || 0
    }

    GetAddressInfo() {
        return {
            title: this.title,
            address: this.address,
            lat: this.lat,
            lng: this.lng
        }
    }

    LogObject() {
        console.log(
            this.title,
            this.address,
            this.lng,
            this.lat
        )
    }
}

const getTest = () => {
    let stations = []
    Array.prototype.forEach.call(objArr, station => {
        station = new Station(station).GetAddressInfo()

        stations.push(station)
    })

    return stations
}

const getAll = () =>
    fetch(openChargeKey)
        .then(res => res.json())
        .then(data => {
            const stations = data.map(station => {
                return new Station(station).GetAddressInfo()
            })

            return stations
        })

export { Station, getTest, getAll} 

