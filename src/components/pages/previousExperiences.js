import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../Footer'
import './previousExperiences.css'
import 'boxicons';


function PreviousExperiences() {
  
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      // <div className="">

      //   <div className="container hei">
      //     <h1 className="mt-5 text-center text-dark">Previous Experiences</h1>
      //   </div>
      //   <Footer />
      // </div>
      <div>
        <section id="hero" class="d-flex align-items-center">
          <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>
              Welcome to <span>GasUp</span>
            </h1>
            <h2>
              We are Providing fueling, mechanical and washing services as door
              steps.
            </h2>
            <div class="d-flex">
              <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section id="contact" class="contact">
          <div class="section-title">
            <h2>Contact</h2>
            <h3>
              <span>Contact Us</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default PreviousExperiences
