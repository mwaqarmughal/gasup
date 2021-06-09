import React from 'react'
import Footer from '../Footer';
import '../../App.css'
import Iframe from 'react-iframe';
// import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react'
import useGeoLocation from "../useGeoLocation";
import $ from "jquery";

function ServiceArea(){
  var loc
  const location = useGeoLocation();
  var locAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+location.coordinates.lat+","+location.coordinates.lng+"&key=AIzaSyBHL1IG8fS5gIwC9SeRlRwu1MnIARP_qCg";
  console.log(locAPI)
   $.get ({
    url: locAPI,
    success: async function(data){
      console.log (data)
       loc = await data.results[3].formatted_address;
       alert( "Your current Location is " + loc)
    }
  })
  return (
    <div>
      <div className="text-center background-height">
        <div>
          <h1 className="bg-transparent">Service Areas</h1>
          {/* <Map google={this.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"current location"} />
            <InfoWindow onClose={this.InfoWindowClose}></InfoWindow>
          </Map> */}
          <Iframe
            src="https://www.google.com/maps/d/embed?mid=1JtQHhwlkdu9gEiIMPTvX2lWEjzQGSvUF"
            frameborder="10px"
            class="mb-4 mb-lg-0"
            width="100%"
            height="700px"
            allowfullscreen
          ></Iframe>
          <div className="inline-block mr-auto pt-1">
            {console.log(location.coordinates.lat, location.coordinates.lng)}
            {location.loaded
              ? console.log(location.coordinates.lng)
              : "Location data not available yet."}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
    export default ServiceArea;
    // GoogleApiWrapper({
    //   apiKey: "AIzaSyC0FCZ6ntdXdGRWV4b_G8vh7ix-EbnlvoY",
    // })(serviceArea);