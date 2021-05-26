import React, {Component} from 'react'
import Footer from '../footer';
import '../../App.css'
import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react'
import useGeoLocation from '../useGeoLocation';


class serviceArea extends Component{
  render(){ 
  return (
    <div>
      <div className="text-center background-height">
        <div>
          <h1 className="bg-transparent">Service Areas</h1>
          <div className="inline-block mr-auto pt-1">
            {location.loaded
              ? JSON.stringify(location)
              : "Location data not available yet."}
          </div>
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"current location"} />
            <InfoWindow onClose={this.InfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
}
    export default GoogleApiWrapper({
      apiKey: "AIzaSyC0FCZ6ntdXdGRWV4b_G8vh7ix-EbnlvoY",
    })(serviceArea);