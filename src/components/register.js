import '../styles/register.css';
import { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';
import Fade from 'react-reveal/Fade';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';


const Register=()=>{
    

    const [firstname, setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const notify = (message) => toast.success(message);

    const registerCustomer=(e)=>{
        e.preventDefault();
        if(firstname==="" || lastname==="" || number==="" || email==="" || password===""){
            toast.error("Error Validations Failed");
            return;
        }
        const data = {
            firstname : firstname,
            lastname: lastname,
            number: number,
            email : email,
            password: password
        }
        const config ={
            headers:{
                Authorization:'Bearer'+localStorage.getItem('ticket')
            }
        }

        
        axios.post('http://localhost:90/customer/register',data)
        .then(response=>{
            
            setMessage(response.data.message);
            console.log(response.data.message)

            notify("Register Successful");
            
                
            setTimeout(() => {
                notify("Registered success")
              window.location.replace("/login");
            }, 1000);
        })
        .catch(e=>{
            toast.error("Invalid login credentials");
            console.log(e)
        })
        
      
    }
    
    
    return(
        <Fade top>
        <div className="containerfirst">
            
        <div className='containersecond'>
            
             
            <div className="row">
                <div className="col-md-9">
                <br></br>

                <h2 className='fonts'>Register</h2>
                <br></br>
                
                

                
          
            <form>
            <div class="form-group">
               
                <label className='register-label' >Firstname</label>
               
                
                <input type="text"
                  className="register-input" onChange={(e)=>setFirstname(e.target.value)}  placeholder="Firstname"/>
               
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label' >Lastname</label>
                

                <input type="text"
                  className="register-input" onChange={(e)=>setLastname(e.target.value)} placeholder="Lastname" />
                
            
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Contact</label>
                

                <input type="text"
                  className="register-inputss" onChange={(e)=>setNumber(e.target.value) } placeholder="Contact" />
                
            </div>
            <br/>

          
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Email</label>
                
                <input type="text"
                  className="register-inputs" onChange={(e)=>setEmail(e.target.value)}

                  placeholder="Email"/>
                
            </div>
            <br/>
            <div class="form-group">
            
                <label className='register-label'>Password</label>
                

                <input type="text" 
                  className="register-input" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />
                
            </div>
            <br/>

            {/* <div class="form-group">
            
                <label className='register-label'>Confirm Password</label>
                

                <input type="text" 
                  className="register-input" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />
                
            </div> */}

            
            <br/>
    
            
            <button type="submit" className="registerbtn" onClick={registerCustomer}>Register</button>
           
            </form>



                </div>
                
                
            </div>
            </div>
            <ToastContainer />
            
        </div>
        </Fade>




    )


}

export default Register;