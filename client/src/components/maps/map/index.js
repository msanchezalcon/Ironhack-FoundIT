import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


const mapsApiKey = `${process.env.REACT_APP_MAPS_KEY}` //aaaaaaaaa

const containerStyle = {
    position: 'fixed',
    width: '85%',
    height: '25%'
}

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            <Map google={this.props.google} zoom={14} containerStyle={containerStyle} initialCenter={{
                lat: 57.7089,
                lng: 11.9746
            }} onClick={this.onMapClicked}>


                <Marker onClick={this.onMarkerClick}
                    title={'Gbg Central Station'}
                    name={'Central Station'}
                    position={{ lat: 57.7086, lng: 11.9733 }} />

                <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>hello</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBQ7FuyGF1dPI9rhNPPc6-ZFTTiRylkxGM')
})(MapContainer)



// class Map extends React.Component {
//     state = {
//         points: this.props.markers
//     }

//     render() {
//         return (
//             <GoogleMap defaultCenter={this.props.defaultCenter} defaultZoom={this.props.defaultZoom}>
//                 <Polyline
//                     path={this.state.points}
//                     geodesic={true}
//                     options={{
//                         strokeColor: "#ff2527",
//                         strokeOpacity: 0.75,
//                         strokeWeight: 2
//                     }}
//                 />
//                 {this.state.points.map(point => <Marker position={{ lat: point.lat, lng: point.lng }} />)}
//             </GoogleMap>
//         )
//     }
// }

// export default withScriptjs(withGoogleMap(Map))