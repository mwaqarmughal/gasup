import React,{useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import BgVideo from "../videos/Booster Fuels Wants To Be The Amazon Prime Of Gasoline.mp4";
import './home.css'

function Home(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <>
        <section id="hero" class="d-flex align-items-center">
          <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>
              Welcome to <span>GasUp</span>
            </h1>
            <h2>
              We Provide fueling, mechanical and washing services as door
              steps.
            </h2>
            <div class="d-flex">
              <a href="/how-it-works" class="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
        </section>
        {/* <div className="container-fluid height text-white">
          <video autoplay="true" muted loop className="bghandleVideo">
            <source src={BgVideo} type="video/mp4"></source>
          </video>
          <div className="container p-5 m-4">
            <h1 className="container-fluid text-center m-4">
              WELCOME TO GASUP
            </h1>
            <h3 className="container-fluid text-center p-4">ON DEMAND FUEL</h3>
            <h3 className="container-fluid text-center">DELIVERY SERVICES</h3>
            <h3 className="container-fluid text-center">24/7</h3>
            <h3 className="container-fluid text-center">
              CARS/TRUCKS/GENERATORS/FLEETS/CONSIRCTIMS
            </h3>
          </div>
        </div> */}
        <Footer />
      </>
    );
}
export default Home; 