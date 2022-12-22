import { useState } from 'react';
import axios from 'axios';
import '../styles/booking.css';
import Slide from 'react-reveal/Slide';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Booking=()=>{
    const params = useParams();
    const notify = (message) => toast.success(message);
    // const [bagid,setBagid] = useState('');

    const [name, setName] = useState('');
    const [address,setAddress] = useState('');
    const [number,setNumber] = useState('');
    // const [venuedata,setvenueData]=useState('');

    const [message,setMessage] = useState('');
    const config ={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('ticket')
        }
    }

    const booking=(e)=>{
        e.preventDefault();
        if(name==="" || address==="" || number===""){
            toast.error("Error Validations Failed");
            return;
        }

        const data = {
            bagid: params.id,
            name : name,
            address:address,
            number:number,
        
        }
        
        axios.post('http://localhost:90/booking/buy',data, config)
        .then(response=>{
            console.log(response);
            setMessage(response.data.message);
            console.log(response.data.message)
            notify(" Successful");
                
            setTimeout(() => {
              window.location.replace("/payment");
              
            }, 
            
            2000);
            
        })
        .catch(e=>{
            console.log(e)
        })
    }
    

    return(
        <div className="headcontainer">
            <video src='/videos/booking.mp4' autoPlay loop muted />
            <div className="row">
                <div className="col-md-8">
                <Slide left>
                <h2 className='texts'>Baggie Order Form</h2>
                </Slide>
                
            <form>

           
            <br/>

            <Slide left>
            <div className="forms-group">
              <label className='text'> Name </label>
              <input
                type="text"
                className="form-control"
                // value={String}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />
            </div>
            </Slide>
            <br/>

            <Slide right>
            <div class="forms-group">
                <label className='text'>Address</label>
                <input type="text" className="form-control"  onChange={(e)=>setAddress(e.target.value)} placeholder="Shipping Address" />
            </div>
            </Slide>
            <br/>
            <Slide right>
            <div class="form-group">
                <label className='text'>Number</label>
                <input type="text" className="form-control"  onChange={(e)=>setNumber(e.target.value)} placeholder="Number" />
            </div>
            </Slide>
            <br/>

        
            <Slide left>
                <div className='buttons'>
            <button type="submit" className="btn btn-primary" onClick={booking}>Buy</button>
            </div>
            </Slide>
            </form>



                </div>
            </div>
            <ToastContainer />
        </div>
    )


}

export default Booking;