import React from 'react'
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from "react-google-maps"
import mapStyles from './mapStyles'

class Map extends React.Component {

    state = {
        points: this.props.markers // all markers in a google-map-react?
    }
    render() {
        console.log("MAP", this.state.points)
        return (
            <>
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: 57.7089, lng: 11.9746 }} defaultOptions={{ styles: mapStyles }} >
                    {this.state.points.map(point => <Marker position={{ lat: point.lat, lng: point.lng }} icon={{
                        url: `/wedding.svg`,
                        scaledSize: new window.google.maps.Size(30, 30)
                    }} />)}
                </GoogleMap>
            </>
        )
    }
}
export default function MapApp(props) {

    const WrappedMap = withScriptjs(withGoogleMap(Map))

    const {
        loadingElement,
        containerElement,
        mapElement,
        defaultCenter,
        defaultZoom,
        markers
    } = props

    console.log(props)

    const initialPoints = markers ? markers.map(item => item.location.coordinates) : []
    const waypoints = initialPoints.map(p => ({ lat: parseFloat(p[0]), lng: parseFloat(p[1]) }))
    let lat = 40.4167754 //props.centerLoc.lat
    let lng = -3.7037901999999576//props.centerLoc.lng
    return (
        <>
            <div style={{ width: "100vw", height: "25vh" }}>
                <WrappedMap
                    googleMapURL={
                        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEYS}&v=3.exp&libraries=geometry,drawing,places`
                    }
                    loadingElement={loadingElement || <div style={{ height: "100%" }} />}
                    containerElement={containerElement || <div style={{ height: "100%" }} />}
                    mapElement={mapElement || <div style={{ height: "100%" }} />}
                    defaultCenter={defaultCenter || { lat: lat, lng: lng }}
                    defaultZoom={defaultZoom || 20}
                    markers={waypoints}
                />
            </div>
        </>
    )
}



// import React from 'react'
// import { GoogleMap, withScriptjs, Marker, withGoogleMap } from "react-google-maps"
// import mapStyles from './mapStyles'

// const mapsApiKey = `${process.env.REACT_APP_MAPS_KEYS}`
// // console.log('api key', process.env)


// class Map extends React.Component {
//     state = {
//         items: this.props.items // all markers in a google-map-react?
//     }
//     render() {
//         console.log("MAP", this.state.points)
//         return (
//             <GoogleMap defaultZoom={10} defaultCenter={{ lat: 57.7089, lng: 11.9746 }} defaultOptions={{ styles: mapStyles }} >
//                 {this.state.items.length > 0 && this.state.items.map(item => <Marker position={{ lat: item.location.coordinates[0], lng: item.location.coordinates[1] }} icon={{ url: './wedding.svg', scaledSize: new window.google.maps.Size(25, 25) }} />)}
//             </GoogleMap>
//         )
//     }
// }




// const WrappedMap = withScriptjs(withGoogleMap(Map))

// export default function MapApp(props) { //need to learn about this props

//     const {
//         loadingElement,
//         containerElement,
//         mapElement,
//         defaultCenter,
//         defaultZoom,
//         items
//     } = props




//     return (
//         <div style={{ width: "100vw", height: "25vh" }}>
//             <WrappedMap
//                 googleMapURL={
//                     `https://maps.googleapis.com/maps/api/js?key=&${mapsApiKey}&v=3.exp&libraries=geometry,drawing,places`
//                 }
//                 loadingElement={loadingElement || <div style={{ height: "100%" }} />}
//                 containerElement={containerElement || <div style={{ height: "100%" }} />}
//                 mapElement={mapElement || <div style={{ height: "100%" }} />}
//                 defaultCenter={defaultCenter}
//                 defaultZoom={defaultZoom || 20}
//                 items={items}
//             />
//         </div>

//     )

// }