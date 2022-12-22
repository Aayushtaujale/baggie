import { useState } from 'react';
import axios from 'axios';

import '../styles/login.css';
import Fade from 'react-reveal/Fade';

import { ToastContainer, toast } from "react-toastify";

import Spin from 'react-reveal/Spin';
import Wobble from 'react-reveal/Wobble';
import 'react-toastify/dist/ReactToastify.css';


// -----------------------------------------------------

const Login = () => {
  const notify = (message) => toast.success(message);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginCustomer=(e)=>{
        
        
    e.preventDefault();
    if(email===" " || password===" "){
        toast.error("Error Validations Failed");
        notify("error Validations Failed");
        return;
    }
    const data = {
        email : email,
        password: password
    }
    axios.post('http://localhost:90/customer/login',data)
    .then(response=>{
        
        console.log(response.data.token)
        if (response.data.token){
            localStorage.setItem('ticket',response.data.token);
            localStorage.setItem('userType','Customer');
            
    
            
            
            setTimeout(
              () => {
               
              window.location.replace("/addbag");
              notify("Logged In")
              
              
            }, 
            
            
            1000);
            notify("Logged In")
            
        }
        else{


            
            setMessage("Invalid login credentials");
        }
    })
    .catch((e)=>{
        // notify("Invalid login credentials");
        toast.error("Invalid login credentials");
      
        console.log(e)
    })
}

  return (
    <div className="login">
        <video className='videoss' src='/videos/background.mp4' autoPlay loop muted />
      <div className="back">

      
      </div>
      <div className='firstone'>
      <div className="loginsecond">
        <div className='letstry'>    
        <Spin>

      <img src="/images/baggs.jpg" className="w-full h-full object-cover"></img>
        </Spin>
      </div>
        <div className="roww">
          <div className="topic">
            <p>{message}</p>

            <div>
            <Fade left>
              <h1 className='topiclabel'>Login Here</h1>
              </Fade>
            </div>
            <Wobble>
            <form>
              <div class="formgroup">
                <label className="login-label txtc">Email</label>
                <input
                  type="email"
                  className="login-input"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div class="formgroup">
                <label className="login-label txtc">Password</label>
                <input
                  type="password"
                  className="login-input"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="login-input-btn" onClick={loginCustomer}>
                Login
              </button>
            </form>
            </Wobble>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </div>


    
  );
};

export default Login;
