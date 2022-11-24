import { useState } from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import '../styles/add_bag.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Venue=()=>{
    const [name, setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [message,setMessage] = useState('');
    const notify = (message) => toast.success(message);

    const loginCustomer=(e)=>{
       
        e.preventDefault();
        if(name==="" || address==="" || phone==="" || email==="" || password===""){
            toast.error("Error Validations Failed");
            return;
        }
        const data = {
            name : name,
            address: address,
            phone : phone,
            email:email,
            password:password
        }
        const config ={
            headers:{
                Authorization:'Bearer'+localStorage.getItem('ticket')
            }
        }
        axios.post('http://localhost:90/bag/register',data)
        .then(response=>{
            
            setMessage(response.data.message);
            console.log(response.data.message)
            notify("Register Successful");
            
                
            // setTimeout(() => {
            //   window.location.replace("/venuelogin");
            // }, 1000);
            
        })
        .catch(e=>{
            toast.error("Invalid  credentials");
            console.log(e)
            
        })
    }
    

    return(
        <div className="containers">
            
            
            
            <div className="row">
            
                <div className="d-flex justify-content-center">
                
                    <div className='topics' 
                    style={{
                paddingRight:0,
                
                margin: "auto",
                color:'black',
                fontWeight:'bolder',
                
              }
              }
              >
                
                <Fade left big>
                   <h1 className='labelname'>ADD RESTAURANTS</h1>
                   </Fade>


              </div>
                  
            
            <div class="shadow"
            style={{
                alignSelf: "center",
            
                height: "70vh",
                width: "70vw",
                borderRadius: 20,
                display: "flex",
                flex: 1,
                flexDirection: "row",
                margin: "auto",
              }}>
                 <div
              style={{
                flex: 0.7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                display: "flex",
                
                justifyContent: "center",
               
              }}>
                <form>
                <p>{message}</p>
                <Bounce top>
                <div class="form-floating mb-4">

           

                <label >Name</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            </div>
            </Bounce>




            <Bounce bottom>
            <div class="form-floating mb-4">
                <label>Address</label>
                <input type="text" className="form-control"  onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
            </div>
            </Bounce>

            <Bounce top>
            <div class="form-floating mb-4">
                <label>Phone</label>
                <input type="text" className="form-control"  onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" />
            </div>
            </Bounce>

            <Bounce bottom>

            <div class="form-floating mb-4">
                <label>Email</label>
                <input type="text" className="form-control"  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            </div>
            </Bounce>

            <Bounce top>
            <div class="form-floating mb-4">
                <label>Password</label>
                <input type="password" className="form-control"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            </div>
            </Bounce>
            <br/>

            
            

           
    
            <Bounce bottom>
            <div class="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" onClick={loginCustomer}>Add Restaurant</button>
            </div>
            </Bounce>
            </form>
            <Fade right big>
            <div style={{ flex: 0.4, height: "auto" }}>
                <img 
                  src={require("../assets/registerbags.jpg")}
                  style={{
                    // width: "fit-content",
                    height: "60vh",
                    objectFit: "cover",
                    paddingLeft: "70px"
                  }}
                />
              </div>
              </Fade>
              


            </div>
                </div>
                
                
                
            </div>
            <Bounce left>
            <div className='logosection'>
            <img url=''></img>
            
            
           
            </div>
            </Bounce>
            </div>
            </div>

              
         
    );

}

export default Venue;