import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/venuedashboard.css';
import Fade from 'react-reveal/Fade';



const VenueDashboard = () => {
    const data=localStorage.getItem("venueId");
    const [image, setImage] =useState('');
  const[bookingData, setbookingData]=useState('');
  const [bookingDetails, setBookingdetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };


  
  useEffect(() => {
    axios
      .post("http://localhost:90/venue/bookings",{"venueId":data})
      .then((result) => {
        console.log(result);
        setBookingdetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="containersfor">
      <Fade left big>
      <h1 className="topicscenter">ACTIVE ORDERS</h1>
      </Fade>
      <div className="designsfor">
        <div className="wrapss">
       
      <div className="row">
        
        {bookingDetails.map((singleBooking) => {
          return (
            <div className="col-md-4">
               <Fade top big>
               <div className="mainthemes">
            
              
              <p> Name: {singleBooking.name}</p>
              <p> Address: {singleBooking.address}</p>
              <p> Order Id: {singleBooking._id}</p>
              <p> Bag Name: {singleBooking.items[0].bagid.name??"name"}</p>
              <p> Price: {singleBooking.items[0].bagid.price??"price"}</p>
              <p> Quantity: {singleBooking.items[0].quantity}</p>
           <p >Image:    <img src={'http://localhost:90/'+singleBooking.items[0].bagid.image??"image"} className="img-thumbnail" /></p>

              {/* <div className="btn1">
              <Link to={"/updatebooking/" + singleBooking._id}>Update</Link>
              </div>
              <div className="btn2">
              <button onClick={()=>{deleteBooking(singleBooking._id)}}>Delete</button>
              </div> */}
              
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
export default VenueDashboard;