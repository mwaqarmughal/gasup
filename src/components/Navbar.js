import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Navbar.css';

function Navbar() {
    return (
      <>
        <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
          <div class="container d-flex">
            <div class="contact-info mr-auto">
              <i class="icofont-envelope"></i>{" "}
              <a href="mailto:contact@gasup.com">contact@gasup.com</a>
              <i className="icofont-phone"></i> +92 300 1234567
            </div>
            <div class="social-links">
              <a href="https://twitter.com/GasUp05433435" class="twitter">
                <i class="icofont-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/GasUp-108738594720064/"
                class="facebook"
              >
                <i class="icofont-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/gasupapp2020/"
                class="instagram"
              >
                <i class="icofont-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gas-up-a52663211/"
                class="linkedin"
              >
                <i class="icofont-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto">
              <a href="/">GasUp</a>
            </h1>
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
                <li>
                  <a href="/complaints">Complaints</a>
                </li>
                <li>
                  <a href="/service-area">Service Area</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    ); 
}

export default Navbar;





   



    // const [button, setButton]= useState(true);
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click)
    // const closeMobileMenu = () => setClick (false)   


    // const showButton = ()=>{
    //     if(window.innerWidth<=960){
    //         setButton(false);
    //     }
    //     else setButton(true);
    // };

    // useEffect(()=>{
    //     showButton();
    // },[]);
    // window.addEventListener('resize', showButton)

//     <nav className="navbar">
//           <div className="navbar-container">
//             <Link
//               to="/"
//               className="navbar-logo text-white"
//               onClick={closeMobileMenu}
//             >
//               GasUp <i className="fab fa-typo3" />
//             </Link>
//             <div className="menu-icon text-white" onClick={handleClick}>
//               <i className={click ? "fas fa-times" : "fas fa-bars"} />
//             </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//               <li className="nav-i">
//                 <Link
//                   to="/"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   HOME
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/how-it-works"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   HOW IT WORKS
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/partnership"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   PARTNERSHIP
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/complaints"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   COMPLAINTS
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/signup-signin"
//                   className="nav-lin-mobile text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   SIGNUP/SIGN IN
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/service-area"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   SERVICE AREA
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/contact-us"
//                   className="nav-lin text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   CONTACT US
//                 </Link>
//               </li>
//             </ul>
//             {button && (
//               <button className="btn btn-secondary">
//                 <Link
//                   to="/signup-signin"
//                   className="text-white"
//                   onClick={closeMobileMenu}
//                 >
//                   Sign Up
//                 </Link>
//               </button>
//             )}
//  }
//  {
//     }