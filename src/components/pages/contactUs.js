 import React, { useEffect} from "react";
// import "../../App.css";
import "boxicons";
import  Icon from "@iconify/react";
import bxsChevronMap from "@iconify-icons/bx/bxs-map";
import bxsChevronEnvelope from "@iconify-icons/bx/bxs-envelope";
import bxsChevronPhone from "@iconify-icons/bx/bxs-phone";
import Footer from "../Footer";
import './contactUs.css'

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <h3>
              <span>Contact Us</span>
            </h3>
            <p>
              Contacting our team is quite easy. Just choose either of three
              optioins to contact us anytime.
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <Icon class="icon" icon={bxsChevronMap} />
                <h3>Our Address</h3>
                <p>
                  Defence Road، Off Raiwind Rd, Lda Avenue Phase 1, Lahore,
                  Punjab 54000
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <Icon class="icon" icon={bxsChevronEnvelope} />

                <h3>Email Us</h3>
                <p>contact@gasup.com</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <Icon class="icon" icon={bxsChevronPhone} /><h3>Call Us</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;

















/* <video id="videoBG" autoplay="true" muted loop className=" bghandleVideo">
        <source src={BgVideo} type="video/mp4"></source>
      </video>
      <div className="container text-center background-height">
        <h1 className="m-4 text-center">Contact Us</h1>
        <div className="row lead">
          <div className="col-md-4 col-12 p-2">
            <h3 className="m-4 ">Location</h3>
            <h4 className="m-4 left">Office</h4>
            <ul className="m-4 left list-unstyled ">
              Lahore
              <li>Phone: +923000000000</li>
              <li>Email: GasUpApp2020@gmail.com</li>
            </ul>
            <ul className="m-4 left list-unstyled">
              Islamabad
              <li>Phone: +923000000001</li>
              <li>Email: GasUpApp2020@gmail.com</li>
            </ul>
          </div>
          <div className="col-2"></div>
          <div className="col-md-4 col-12">
            <h3 className="m-4 ">Social Media Contact</h3>
            <ul className="m-4 left ">
              Lahore
              <li className="list-unstyled p-1 ">
                <i className="fab fa-whatsapp" /> +923000000000
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-twitter" /> @gasUpOfficial
              </li>
              <li className="p-1  list-unstyled">
                <i className="fab fa-facebook" /> gasUpOfficial
              </li>
              <li className="p-1  list-unstyled ">
                <i className="fab fa-instagram" /> @gasUpOfficial
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-linkedin" /> @gasUpOfficial
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-youtube" /> @gasUpOfficial
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-center">
          Call us at <br /> Toll free: 111 222 3334 <br />
          or email at GasUpApp2020@gmail.com
        </h3>
      </div>
      <div>
    </div> */
