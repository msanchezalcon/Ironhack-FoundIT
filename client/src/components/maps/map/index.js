import React from 'react'
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from "react-google-maps"

const mapsApiKey = `${process.env.REACT_APP_MAPS_KEYS}`


class Map extends React.Component {
    state = {
        points: this.props.markers // all markers in a google-map-react?
    }
    render() {
        console.log("MAP", this.state.points)
        return (
            <></>
            // <GoogleMap defaultZoom={10} defaultCenter={{ lat: 57.7089, lng: 11.9746 }} >
            //     {this.state.points.map(point => <Marker position={{ lat: point.lat, lng: point.lng }} />)}
            // </GoogleMap>
        )
    }
}




const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapApp(props) { //need to learn about this props


    const {
        loadingElement,
        containerElement,
        mapElement,
        defaultCenter,
        defaultZoom,
        markers
    } = props
    // if (props) { console.log('props map app', props.markers) }

    const initialPoints = props.markers.map(item => {
        item.location.coordinates
    })
    const waypoints = initialPoints.map(p => ({ lat: parseFloat(p[0]), lng: parseFloat(p[1]) }))
    let lat = props.centerLoc.lat
    let lng = props.centerLoc.lng
    return (

        <div style={{ width: "100vw", height: "25vh" }}>
            <WrappedMap
                googleMapURL={
                    'https://maps.googleapis.com/maps/api/js?key=' + mapsApiKey + 'AIzaSyBdBT0F-Qk9YpUy1xEu2Wn2QD7fomLUuuM&libraries=geometry,drawing,places'
                }
                loadingElement={loadingElement || <div style={{ height: "100%" }} />}
                containerElement={containerElement || <div style={{ height: "100%" }} />}
                mapElement={mapElement || <div style={{ height: "100%" }} />}
                defaultCenter={defaultCenter || { lat: lat, lng: lng }}
                defaultZoom={defaultZoom || 20}
                markers={waypoints}
            />
        </div>

    )

}