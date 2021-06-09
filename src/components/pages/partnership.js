import React ,{ useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import './partnership.css'

function Partnership() {
  

  useEffect(() => {
  window.scrollTo(0,0)
}, [])  

const [email, setEmail] = useState("");
const [qty, setQty] = useState("");
const [phone, setPhone] = useState("");
const [enquiry, setEnquiry] = useState("");
const [CNIC, setCNIC] = useState("");
const [address, setAddress] = useState("");
const [company, setCompany] = useState("");
const [pumpCity, setPumpCity] = useState("");

const history = useHistory()

async function partner(){
  let item={email, qty,phone,enquiry,CNIC,address,company,pumpCity}
  let dotpos = email.lastIndexOf(".");         
  let atpos = email.indexOf("@");
  if (!email) {
    return alert("Email required");
  }
  else if (atpos < 1 || ( dotpos - atpos < 2 )) {
    return alert("Please enter correct email ID")
    }

  if (!qty) {
    return alert("Quantity required");
  }
  if (!phone) {
    return alert("Number is required");
  } else if (phone.length !== 11) {
    return alert("Incomplete phone number");
  }
  if (!enquiry) {
    return alert("Enquiry required");
  }
  if(!CNIC){
    return alert("CNIC is required");
  } else if (CNIC.length !== 13) {
    return alert("Incomplete CNIC");
  }
  if (!address) {
    return alert("Address required");
  } 
if (!company) {
    return alert("Company Name is required");
  }
  if (!pumpCity) {
    return alert("Pump City required");
  } 
  else {
     alert("Request submitted successfully.");
  }

  console.warn(item)
  
  let result = await fetch("http://localhost:4000/partnership", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  result = await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/")
}
  return (
    <div>
      <section id="complaints" class="complaints">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Partnership</h2>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12">
              <form class="php-email-form">
                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>

                  <div class="validate"></div>
                  <div class="col form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="qty"
                      id="qty"
                      placeholder="Enter the Fuel Pump Quantity"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="03*********"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>

                  <div class="validate"></div>
                  <div class="col form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="enquiry"
                      id="enquiry"
                      placeholder="Pump / Wash Station / Mechanic"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars of subject"
                      value={enquiry}
                      onChange={(e) => setEnquiry(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="CNIC"
                      id="CNIC"
                      placeholder="CNIC without - "
                      value={CNIC}
                      onChange={(e) => setCNIC(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>

                  <div class="validate"></div>
                  <div class="col form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="address"
                      id="address"
                      placeholder="Your Permanent Address"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars of subject"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="company"
                      id="company"
                      placeholder="Your Company Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>

                  <div class="validate"></div>
                  <div class="col form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="PumpCity"
                      name="PumpCity"
                      placeholder="City of Company"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars of subject"
                      value={pumpCity}
                      onChange={(e) => setPumpCity(e.target.value)}
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" onClick={partner}>
                    Send Partnership Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Partnership;











//<div>


    //   <div className="container  background-height">
    //     <h1 className="m-4 text-center text-dark">
    //       Exclusive Partnership Opportunity
    //     </h1>
    //     <div className="m-4">
    //       <div className="row">
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Email*</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="email"
    //             placeholder="Enter email"
    //             name="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Fuel Pump Quantity*</label>
    //           <input
    //             type="number"
    //             className="form-control"
    //             placeholder="Enter Qty"
    //             name="qty"
    //             value={qty}
    //             onChange={(e) => setQty(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Phone Number*</label>
    //           <input
    //             type="number"
    //             className="form-control"
    //             id="phone"
    //             placeholder="Phone Number"
    //             name="phone"
    //             value={phone}
    //             onChange={(e) => setPhone(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Enquiry*</label>
    //           <input
    //             type="enquiry"
    //             className="form-control"
    //             placeholder="Type of Enquiry"
    //             name="enquiry"
    //             value={enquiry}
    //             onChange={(e) => setEnquiry(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">CNIC*</label>
    //           <input
    //             type="Number"
    //             className="form-control"
    //             placeholder="Enter your CNIC No. without -"
    //             name="CNIC"
    //             value={CNIC}
    //             onChange={(e) => setCNIC(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Address*</label>
    //           <input
    //             type="String"
    //             className="form-control"
    //             placeholder="Enter your permanent address"
    //             name="address"
    //             value={address}
    //             onChange={(e) => setAddress(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Company Name*</label>
    //           <input
    //             type="String"
    //             className="form-control"
    //             placeholder="Enter your company Name"
    //             name="Company"
    //             value={company}
    //             onChange={(e) => setCompany(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-md-6 col-12 p-2">
    //           <label className="">Pump City*</label>
    //           <input
    //             type="String"
    //             className="form-control"
    //             placeholder="Enter city where pump is located"
    //             name="PumpCity"
    //             value={pumpCity}
    //             onChange={(e) => setPumpCity(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <button className="btn btn-dark" type="submit" onClick={partner}>
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>