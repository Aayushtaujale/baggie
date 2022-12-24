import { useState } from 'react';
import axios from 'axios';
import '../styles/venuelogin.css';
import Bounce from 'react-reveal/Bounce';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Venuelogin=()=>{
    const notify = (message) => toast.success(message);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');

    const loginVenue=(e)=>{
        localStorage.clear();
        e.preventDefault();
        if(email==="" || password===""){
            toast.error("Error Validations Failed");
            return;
        }
        const data = {
            email : email,
            password: password
        }
        axios.post('http://localhost:90/venue/login',data)
        .then(response=>{
            
            console.log(response.data.token)
            setMessage("User Logged In")
            if (response.data.token){
                console.log(response.data)
                localStorage.setItem('ticket',response.data.token);
                localStorage.setItem('userType','Venue');
                localStorage.setItem('venueId',response.data.venueId);
                // window.location.replace('/venuedashboard');
                
                
                setTimeout(() => {
                    notify("Logged In");
                  window.location.replace("/venuedashboard");
                  notify("Logged In")
                }, 2000);
                notify("Logged In")
            }
            else{
                toast.error("Invalid login credentials");
            }
        })
        .catch((e)=>{
            
            // console.log(e)
        })
    }
    

    return(
        <div className="venue">
            <div className='venuesecond'>
            <div className="row">
                <div className="topic">
                <Bounce top>
                <h2 className='topiclabels'>Venue Login</h2>
                </Bounce>

                <p>{message}</p>
               
                
            <form>
            <div class="formgroups">
            <Bounce top>
                <label for="validationCustom03" className='venue-label'>Email</label>
                </Bounce>

                <Bounce top>
                <input type="text" className="venue-input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" id="validationCustom03" required/>
                
                </Bounce>
            </div>

           
            <div class="formgroups">
            <Bounce bottom>

                <label className='venue-label'>Password</label>
                </Bounce>

                <Bounce bottom>

                <input type="password" className="venue-input"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </Bounce>
            </div>
           
            <Bounce bottom>

            <button type="submit" className="venue-input-btn" onClick={loginVenue}>Login</button>
            </Bounce>
            </form>



                </div>
            </div>
            </div>
            <ToastContainer />
        </div>

    )


}

export default Venuelogin;