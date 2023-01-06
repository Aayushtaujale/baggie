import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/mybookings.css';
import Fade from 'react-reveal/Fade';

import React from 'react';

const DisplayBooking = () => {
  const[bookingData, setbookingData]=useState('');
  const [bookingDetails, setBookingdetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };


  const deleteBooking=(pid)=>{
   
    axios.delete("http://localhost:90/booking/delete/"+pid,config)
    .then(result=>{
        console.log(result)
        if(result.data.status){
            window.location.reload();
        }
    })
    .catch()

  }
  useEffect(() => {
    axios
      .get("http://localhost:90/booking/display", config)
      .then((result) => {
        console.log(result);
        setBookingdetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="containerfor">
      <Fade left big>
      <h1 className="topichead">MY ORDERS</h1>
      </Fade>
      <div className="designfor">
        <div className="wraps">
       
      <div className="row">
        
      {bookingDetails.map((singleBooking) => {
          return (
            <div className="col-md-4">
               <Fade top big>
               <div className="maintheme">
            
              
              <p> Name: {singleBooking.name}</p>
              <p> Address: {singleBooking.address}</p>
              <p> Order Id: {singleBooking._id}</p>

              <br/>
              <p>Order Details:</p>
                {singleBooking.items.map((item)=>{
                  return(
                    <React.Fragment>
                     <br/>
              <p> Bag Name: {item.bagid.name??"name"}</p>
              <p> Price: {item.bagid.price??"price"}</p>
              <p> Quantity: {item.quantity}</p>
           <p >Image:    <img src={'http://localhost:90/'+item.bagid.image??"image"} className="img-thumbnail" /></p>
                      </React.Fragment>
                  );
                })}
              {/* <div className="btn1"> */}
              {/* <Link to={"/updatebooking/" + singleBooking._id}>Update</Link> */}
              {/* </div> */}
              <div className="btn2">
              <button onClick={()=>{deleteBooking(singleBooking._id)}}>Cancel Order</button>
              </div>
              
            </div>
            </Fade>
            </div>
          );
        })}
        
        </div>
      </div>
      </div>
    </div>
  );
};
export default DisplayBooking;