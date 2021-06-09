import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../Footer'
import useGeoLocation from '../useGeoLocation';
import "./termsOfServices.css";

function TermsOfServices() {
  const location = useGeoLocation();
     useEffect(() => {
    }, []);
    window.scrollTo(0, 0);
    return (
      <div className="">
        <div className="container hei">
          <h1 className="mt-5 text-center text-dark">Terms Of Services</h1>
          <div className="inline-block mr-auto pt-1">
            {location.loaded
              ? JSON.stringify(location)
              : "Location data not available yet."
            }
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default TermsOfServices
