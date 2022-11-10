import {Link} from 'react-router-dom';
import React, {useState} from 'react';
// import "../styles/Menubar.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";




const Menubar=()=>{
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
      {/* <li class="nav-item">
              <Link class="nav-link" to="/booking">Book
              </Link></li> */}

              <li class="nav-item">
              <Link class="nav-link" to="/profile">Profile
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/updateprofile">Update Profile
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/displaybookings">My bookings
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/venueupdate">Product Update
              </Link>
            </li>

            {/* <li class="nav-item">
              <button class="btn btn-primary" onClick={logOut}>Log Out
              </button>
            </li> */}
      </>
    )
  }
  else{
    menu=(
      <>
      
        <li class="nav-item" >
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav">
              <Link class="nav-link" to="/register">Register
              </Link></li>
      
      </>
    )
  }

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/Home">Baggie</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">

            
          <li class="nav-item">
              <Link class="nav-link" to="/venues"> Bags
              </Link></li>

              <li class="nav-item">
              <Link class="nav-link" to="/venuelogin">Login Admin
              </Link>
              </li>
          
          

            <li class="nav-item">
              <Link class="nav-link" to="/venue">Add Bags
              </Link></li>


             

              

            <li class="nav-item">
              <Link class="nav-link" to="/Contact">Contact
              </Link>
            </li>

           
            {menu}
            
            
            
          </ul>
          
        </div>
      </nav>

    )




    
}




export default Menubar;