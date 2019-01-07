import objArr from '../res/objArr'
import { openChargeKey } from './API_Keys'

class Station {
    constructor( { UsageType, AddressInfo, StatusType, Connections }) {
        const {
            Title: title, 
            AddressLine1: address,
            Longitude: lng,
            Latitude: lat,
            Town: town,
            Postcode: postcode
        } = AddressInfo

        const {
            IsOperational: isOperational,
            Title: statusTitle
        } = StatusType

        const connectors = Connections.map((x) => {
            return x.ConnectionType ? x.ConnectionType.Title || 'NA' : 'NA'
        })

        this.id = lng + lat
        this.title = title || 'NA'
        this.address = address || 'NA'
        this.lng = lng || 0
        this.lat = lat || 0
        this.town = town || 'NA'
        this.postcode = postcode || 'NA'
        this.usageType = UsageType ? 
                            UsageType.Title || 'NA' : 'NA' 
        this.isOperational = isOperational || 'NA'
        this.statusTitle = statusTitle || 'NA'
        this.connectors = connectors
    }

    GetInfo() {
        return {
            id: this.id,
            title: this.title,
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            town: this.town, 
            postcode: this.postcode,
            usageType: this.usageType,
            isOperational: this.isOperational,
            statusTitle: this.statusTitle,
            connectors: this.connectors
        }
    }

    // OUTDATED
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
        station = new Station(station).GetInfo()

        stations.push(station)
    })

    return stations
}

const getAll = () =>
    fetch(openChargeKey)
        .then(res => res.json())
        .then(data => {
            const stations = data.map(station => {
                return new Station(station).GetInfo()
            })

            return stations
        })

export { Station, getTest, getAll} 

