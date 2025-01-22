import { useState } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import '../assets/components/map.sass'

let containerStyle = {
    width: '100%',
    height: '400px'
}

let center = {
    lat: -3.745,
    lng: -38.523
}

export default function Map() {
    const googleMapsKey = import.meta.env.GOOGLE_MAPS_KEY
    let [mapType, setMapType] = useState('roadmap')
    const toggleMapType = (e) => {
        e.target.classList.add('active')
        if (e.target.id === 'roadmap-btn') {
            document.querySelector('button#satellite-btn').classList.remove('active')
            setMapType('roadmap')
        } else if (e.target.id === 'satellite-btn') {
            document.querySelector('button#roadmap-btn').classList.remove('active')
            setMapType('satellite')
        }
    }

    return (
        <div className="map-area">
            <div className="actions-area position-relative">
                <button type="button" onClick={toggleMapType} className="active border-1 position-absolute p-2" id="roadmap-btn">Mapa</button>
                <button type="button" onClick={toggleMapType} className="border-1 position-absolute p-2" id="satellite-btn">Satélite</button>
            </div>
            <LoadScript googleMapsApiKey={googleMapsKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    mapTypeId={mapType}
                />
            </LoadScript>
        </div>
    )
}
