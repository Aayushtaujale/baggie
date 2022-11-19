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
      <div className="login  ">
      
      {/* <video src='/videos/baggies.mp4' autoPlay loop muted /> */}
      <div className='firstone'>
      <div className="loginsecond">
        <div className='letstry'>    
      <img src="/images/baggs.jpg" className="w-full h-full object-cover"></img>
      </div>
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
    </div>


    // <div className='w-full min-h-screen flex items-start'>
    //   <div className='relative w-1/2 h-full flex flex-col'>
    //     <div className='absoulte top-[25%] left-[10%] flex flex-col'>
    //       <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas into Reality</h1>
    //       <p className='text-xl text-white font-normal'>Start Your Journey with Us</p>

    //     </div>
    //     <img src="/images/baggs.png" className="w-full h-full object-cover"></img>
    //   </div>

    //   <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
    //     <h1 className='text-xl text-[#060606] font-semibold'>brand</h1>

    //     <div className='w-full flex flex-col'>
    //       <h3 className='text-2xl font-semibold mb-4'>Login</h3>
    //       <p className='text-sm mb-2'>Welcome Back! Please enter your details</p>
    //     </div>
    //   </div>
    // </div>




    
  );
};

export default Login;

//////////////////////////////