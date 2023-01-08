import { useState } from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import '../styles/venue.css';
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

    const loginAdmin=(e)=>{
       
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
        axios.post('http://localhost:90/venue/register',data)
        .then(response=>{
            
            setMessage(response.data.message);
            console.log(response.data.message)
            notify("Register Successful");
            
                
            setTimeout(() => {
              window.location.replace("/venuelogin");
            }, 1000);
            
        })
        .catch(e=>{
            toast.error("Invalid login credentials");
            console.log(e)
            
        })
    }
    

    return(
        <div className="containers">
            
            
            
            <div className="row">
            
                <div className="d-flex justify-content-center">
                
                    <div className='topics' 
                    style={{
                paddingRight:30,
                
                margin: "auto",
                color:'black',
                fontWeight:'bolder',
                
              }}>
                
                <Fade left big>
                   <h1 className='labelname'>Register Admin</h1>
                   </Fade>


              </div>
                  
            
            <div class="shadow"
            style={{
                alignSelf: "center",
            
                height: "70vh",
                width: "50vw",
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

           

                <label className='color'>Name</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            </div>
            </Bounce>


<br></br>
            <Bounce bottom>
            <div class="form-floating mb-4">
                <label className='color'>Address</label>
                <input type="text" className="form-control"  onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
            </div>
            </Bounce>
            <br></br>
            <Bounce top>
            <div class="form-floating mb-4">
                <label className='color'>Phone</label>
                <input type="text" className="form-control"  onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" />
            </div>
            </Bounce>
            <br></br>
            <Bounce bottom>

            <div class="form-floating mb-4">
                <label className='color'>Email</label>
                <input type="text" className="form-control"  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            </div>
            </Bounce>
            <br></br>
            <Bounce top>
            <div class="form-floating mb-4">
                <label className='color'>Password</label>
                <input type="password" className="form-control"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            </div>
            </Bounce>
            <br/>

            
            

           
    
            <Bounce bottom>
            <div class="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" onClick={loginAdmin}>Register</button>
            </div>
            </Bounce>
            </form>
            <Fade right big>
            <div style={{ flex: 0.4, height: "auto" }}>
                <img 
                  src={require("../assets/registerimage.jpg")}
                  style={{
                    // width: "fit-c.0ontent",
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
            <ToastContainer />
            </div>

              
         
    );

}

export default Venue;