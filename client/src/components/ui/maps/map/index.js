import React, { useEffect } from 'react'
import { GoogleMap, withScriptjs, Marker, withGoogleMap, InfoWindow } from "react-google-maps"
import mapStyles from './mapStyles'

class Map extends React.Component {

    state = {
        points: this.props.markers, // all markers in a google-map-react?
        items: this.props.items, //all info from all items
        selectedItem: null,
        setSelectedItem: null
    }



    render() {
        // console.log("map this state points", this.state.points)
        // console.log('map this state items', this.state.items)
        return (
            <>
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: 57.7089, lng: 11.9746 }} defaultOptions={{ styles: mapStyles }} >
                    {this.state.items.map(item =>
                        <Marker id={item._id}
                            onClick={() => {
                                console.log('marker clickado!', item.name)



                            }}
                            name={item.name}
                            description={item.description}
                            position={{ lat: item.location.coordinates[0], lng: item.location.coordinates[1] }}
                            icon={{
                                url: `/wedding.svg`,
                                scaledSize: new window.google.maps.Size(30, 30)
                            }} />)}

                    {/* {selectedItem && (
                        <InfoWindow
                            onCloseClick={() => {
                                setSelectedItem(null);
                            }}
                            position={{
                                lat: selectedItem.location.coordinates[1],
                                lng: selectedItem.location.coordinates[0]
                            }}
                        >
                            <div>
                                <h2>{selectedItem.name}</h2>
                                <p>{selectedItem.description}</p>
                            </div>
                        </InfoWindow>
                    )} */}

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
        markers,
        items //info about items from parent
    } = props



    console.log('items info map', markers)
    const initialPoints = markers ? markers.map(item => item.location.coordinates) : []
    const waypoints = initialPoints.map(p => ({ lat: parseFloat(p[0]), lng: parseFloat(p[1]) }))
    let lat = 40.4167754 //props.centerLoc.lat
    let lng = -3.7037901999999576//props.centerLoc.lng
    return (
        <>

            <div style={{ width: "100vw", height: "40vh" }}>
                <WrappedMap
                    googleMapURL={
                        `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8O--GDLv_W7ar5KhqUzBsDayxtffbZso&v=3.exp&libraries=geometry,drawing,places`
                    }
                    loadingElement={loadingElement || <div style={{ height: "100%" }} />}
                    containerElement={containerElement || <div style={{ height: "100%" }} />}
                    mapElement={mapElement || <div style={{ height: "100%" }} />}
                    defaultCenter={defaultCenter || { lat: lat, lng: lng }}
                    defaultZoom={defaultZoom || 20}
                    markers={waypoints}
                    items={items}
                />
            </div>
        </>
    )
}
