import { useState } from 'react';
import axios from 'axios';

import '../styles/login.css';
// import Fade from 'react-reveal/Fade';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// -----------------------------------------------------
const Login = () => {
  const notify = (message) => toast.success(message);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginCustomer=(e)=>{
        
        
    e.preventDefault();
    if(email==="" || password===""){
        toast.error("Error Validations Failed");
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
            
            // window.location.replace('/profile');
            
            
            setTimeout(() => {
               
              window.location.replace("/profile");
              notify("Logged In")
              
              
            }, 
            
            
            2000);
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
    <div className="login ">
      <video src='/videos/baggies.mp4' autoPlay loop muted />
      <div className="loginsecond">
        <div className="roww">
          <div className="topic">
            <p>{message}</p>

            <div>
              <h1 className='topiclabel'>Login Here</h1>
            </div>
            <form>
              <div class="formgroup">
                <label className="login-label txtc">Email</label>
                <input
                  type="text"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//////////////////////////////