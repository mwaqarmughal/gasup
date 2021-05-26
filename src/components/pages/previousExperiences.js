import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../footer'
import useGeoLocation from '../useGeoLocation';
import './previousExperiences.css'



function PreviousExperiences() {
  const location = useGeoLocation()
  ;
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="">
        <div className="inline-block mr-auto pt-1">
          {location.loaded
            ? JSON.stringify(location)
            : "Location data not available yet."}
        </div>
        <div className="container hei">
          <h1 className="mt-5 text-center text-dark">Previous Experiences</h1>
        </div>
        <Footer />
      </div>
    );
}

export default PreviousExperiences
