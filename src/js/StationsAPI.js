import * as data from '../res/formated_OCM.json'
import obj from '../res/tempObj'
import objArr from '../res/objArr'

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
            this.long,
            this.lat
        )
    }
}

export default Station

