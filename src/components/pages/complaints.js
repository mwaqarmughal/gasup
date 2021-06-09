import React ,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import './complaints.css'


function Complaints() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


const [email, setEmail] = useState("");
const [category, setCategory] = useState("");
const [name, setName] = useState("");
const [complaints, setComplaints] = useState("");
const history = useHistory();

async function Comp() {
  let item = { email, category,name, complaints };
  let dotpos = email.lastIndexOf(".");
  let atpos = email.indexOf("@");
  if (!email) {
    return alert("Email required");
  } else if (atpos < 1 || dotpos - atpos < 2) {
    return alert("Please enter correct email ID");
  }
if (!category) {
  return alert("Please select a category");
} else if (category === "category") {
  return alert("Please select a category");
}
  if (!name) {
    return alert("Please enter the name of mischief-maker");
  }
  if (!complaints) {
    return alert("Please enter your suggestion or complaint");
  }
  else if(complaints.length<20 ){
   return alert('Complaint or suggestion must be of more than 20 characters.')
  }
   else {
    alert("Request submitted successfully");
  }
  console.warn(item);
  let result = await fetch("http://localhost:4000/complaints", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  result = await result.json();
  localStorage.setItem("user-info", JSON.stringify(result));

  history.goBack('/complaints')
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
  return (
    <div>
      <section id="complaints" class="complaints">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Complaints</h2>
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <div class="validate"></div>
                  </div>

                  <div>
                    <label className="text-left">
                      Please Select a category
                    </label>
                    <select
                      className="form-select dropownn"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option className="dropownn" value="category">
                        Category
                      </option>
                      <option className="dropownn" value="Service Provider">
                        Service Provider
                      </option>
                      <option className="dropownn" value="Fuel">
                        Fuel Quality or Quantity
                      </option>
                      <option className="dropownn" value="Mechanical Parts">
                        Mechanical Parts
                      </option>
                      <option className="dropownn" value="Pricing">
                        Pricing
                      </option>
                    </select>
                  </div>
                </div>
                <div class="validate"></div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter the name of Mischief Maker"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars of subject"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    id="comment"
                    name="comment"
                    onChange={(e) => setComplaints(e.target.value)}
                    value={complaints}
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" onClick={Comp}>Send Complaint</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    // <div>
    //   <div className="container background-height">
    //     <h1 className="m-4 down text-center"> COMPLAINTS</h1>
    //     <div className="m-4">
    //       <div className="row m-3">
    //         <div className="col-12 p-2 col-md-8">
    //           <label className="">Email*</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="email"
    //             placeholder="Enter email"
    //             name="email"
    //             onChange={(e) => setEmail(e.target.value)}
    //             value={email}
    //           />
    //         </div>

    //         <div className="col-8 p-2 col-md-3">
    //           <label className="text-left">Please Select a category</label>
    //           <select
    //             className="form-select dropownn"
    //             onChange={(e) => setCategory(e.target.value)}
    //           >
    //             <option className="dropownn" value="category">
    //               Category
    //             </option>
    //             <option className="dropownn" value="Service Provider">
    //               Service Provider
    //             </option>
    //             <option className="dropownn" value="Fuel">
    //               Fuel Quality or Quantity
    //             </option>
    //             <option className="dropownn" value="Mechanical Parts">
    //               Mechanical Parts
    //             </option>
    //             <option className="dropownn" value="Pricing">
    //               Pricing
    //             </option>
    //           </select>
    //         </div>

    //         <div className="col-12 p-2 col-md-8">
    //           <label className="">Name*</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="name"
    //             placeholder="Enter the name of mischief-maker"
    //             name="name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-group text-left m-4">
    //         <label for="comment">Comment:</label>
    //         <textarea
    //           className="form-control col-md-11 col-12"
    //           rows="7"
    //           id="comment"
    //           name="comment"
    //           onChange={(e) => setComplaints(e.target.value)}
    //           value={complaints}
    //         ></textarea>

    //         <br />
    //         <button className="btn btn-dark" onClick={Comp}>
    //           Submit
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container pl-lg-5">{/* <GetUser /> */}</div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>
  );
}
export default Complaints
