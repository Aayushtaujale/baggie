import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import "../styles/Menubar.css";
// import "../styles/navbar.css";

import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";




const Menubar=()=>{
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");



    const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
      
    } else setIcon("nav__toggler");
  };
  const notify = (message) => toast.success(message);
  const logOut = () => {
    // Log Out function
    // Erasing the token here
    notify("Logged Out");
    localStorage.clear();
    setTimeout(() => {
      window.location.replace("/Home");
    }, 1000);
  };
  
  
  

  var menu;





  if(localStorage.getItem('ticket') ){
    menu=(
      <>
      
          <ul>

              <li class="nav">
              <Link class="nav-link" to="/profile">Profile
              </Link>
            </li>

            <li class="nav">
              <Link class="nav-link" to="/updateprofile">Update Profile
              </Link>
            </li>

            

            <li class="nav">
              <Link class="nav-link" to="/venueupdate">Product Update
              </Link>
            </li>

            <li class="nav">
              <button class="btn btn-primary" onClick={logOut}>Log Out
              </button>
            </li>
          </ul>
      </>
    )
  }


    return(
           <nav className="nav">
            <a href="#" className="nav__brand">
              Baggie
            </a>
            <ul className={active}>
            <li className="nav__item">
              <Link class="nav-link" to="/login"> Login         </Link>
              </li>
              <li>
              <Link class="nav-link" to="/register">Register
              </Link></li>
      
              <li className="nav__item">
              <Link class="nav-link" to="/"> Home         </Link>
              </li>
              <li className="nav__item">
              <Link class="nav-link" to="/venues"> Bags
                     </Link>
              </li>
              <li className="nav__item">
              <Link class="nav-link" to="/venuelogin">Login Admin               </Link>
              </li>
              <li className="nav__item">
              <Link class="nav-link" to="/venue">Add Bags              </Link>
              </li>
              <li className="nav__item">
              <Link class="nav-link" to="/Contact">Contact
                    </Link>
              </li>
            </ul>
            <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              {/* <div className="line3"></div> */}
            </div>
          </nav>

  

    )

}




export default Menubar;



// import React, { useState } from "react";
// import "../styles/navbar.css";

// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");







//     const notify = (message) => toast.success(message);
//   const logOut = () => {
//     // Log Out function
//     // Erasing the token here
//     notify("Logged Out");
//     localStorage.clear();
//     setTimeout(() => {
//       window.location.replace("/Home");
//     }, 1000);
//   };
  
  
  

//   var menu;





//   if(localStorage.getItem('ticket') ){
//     menu=(
//       <>
      

//               <li class="nav-item">
//               <Link class="nav-link" to="/profile">Profile
//               </Link>
//             </li>

//             <li class="nav-item">
//               <Link class="nav-link" to="/updateprofile">Update Profile
//               </Link>
//             </li>

            

//             <li class="nav-item">
//               <Link class="nav-link" to="/venueupdate">Product Update
//               </Link>
//             </li>

//             <li class="nav-item">
//               <button class="btn btn-primary" onClick={logOut}>Log Out
//               </button>
//             </li>
//       </>
//     )
//   }
//   else{
//     menu=(
//       <>
      
//         <li class="nav-item" >
//               <Link class="nav-link" to="/login">Login</Link>
//             </li>
//             <li class="nav">
//               <Link class="nav-link" to="/register">Register
//               </Link></li>
      
//       </>
//     )
//   }

//     return(
//         <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
//         <a class="navbar-brand" href="/Home">Baggie</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon" ></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul class="navbar-nav">

            
//           <li class="nav-item">
//               <Link class="nav-link" to="/venues"> Bags
//               </Link></li>

//               <li class="nav-item">
//               <Link class="nav-link" to="/venuelogin">Login Admin
//               </Link>
//               </li>
          
          

//             <li class="nav-item">
//               <Link class="nav-link" to="/venue">Add Bags
//               </Link></li>


             

              

//             <li class="nav-item">
//               <Link class="nav-link" to="/Contact">Contact
//               </Link>
//             </li>

           
//             {menu}
            
            
            
//           </ul>
          
//         </div>
//       </nav>

  

//     )

// }




























//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
      
//     } else setIcon("nav__toggler");
//   };




//   var menu;





//   if(localStorage.getItem('ticket') ){
//     menu=(
//       <>
      

//               <li class="nav-item">
//               <Link class="nav-link" to="/profile">Profile
//               </Link>
//             </li>

//             <li class="nav-item">
//               <Link class="nav-link" to="/updateprofile">Update Profile
//               </Link>
//             </li>

            

//             <li class="nav-item">
//               <Link class="nav-link" to="/venueupdate">Product Update
//               </Link>
//             </li>

//             <li class="nav-item">
//               <button class="btn btn-primary" onClick={logOut}>Log Out
//               </button>
//             </li>
//       </>
//     )
//   }
//   else{
//     menu=(
//       <>
      
//         <li class="nav-item" >
//               <Link class="nav-link" to="/login">Login</Link>
//             </li>
//             <li class="nav">
//               <Link class="nav-link" to="/register">Register
//               </Link></li>
      
//       </>
//     )
//   }



//   return (
//     <nav className="nav">
//       <a href="#" className="nav__brand">
//         Baggie
//       </a>
//       <ul className={active}>
//         <li className="nav__item">
//         <Link class="nav-link" to="/"> Home         </Link>
//         </li>
//         <li className="nav__item">
//         <Link class="nav-link" to="/venues"> Bags
//                </Link>
//         </li>
//         <li className="nav__item">
//         <Link class="nav-link" to="/venuelogin">Login Admin               </Link>
//         </li>
//         <li className="nav__item">
//         <Link class="nav-link" to="/venue">Add Bags              </Link>
//         </li>
//         <li className="nav__item">
//         <Link class="nav-link" to="/Contact">Contact
//               </Link>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         {/* <div className="line3"></div> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;