import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/update.css';
import Fade from 'react-reveal/Fade';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Update=()=>{
    const notify = (message) => toast.success(message);
    const[customerdata,setcustomerData] =useState('');
    const[firstname, setFirstname]=useState('');
    const[lastname, setLastname]=useState('');
    const[number, setNumber]=useState('');
    const[email, setEmail]=useState('');
    // const[password, setPassword]=useState('');
   
    const config ={
        headers:{
            Authorization:'Bearer '+ localStorage.getItem('ticket')
        }
    }

    const updPro=(e)=>{
        e.preventDefault();
        if(firstname==="" || lastname==="" || number==="" || email===""){
            toast.error("Error Validations Failed");
            return;
        }
        const data = {
            firstname:firstname,
            lastname:lastname,
            number:number,
            email:email,
        }
        axios.put("http://localhost:90/customer/update",data,config)
        .then(result=>{
            notify("Profile Updated Successfully");
                
                setTimeout(() => {
                  window.location.replace("/profile");
                //   notify("Profile Updated")
                }, 
                
                2000);
            console.log(result)

        })
        .catch(e=>{
            console.log(e);
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard",config)
        .then(result=>{
            console.log(result.data.data);
            setFirstname(result.data.data.firstname);
            setLastname(result.data.data.lastname);
            setNumber(result.data.data.number);
            setEmail(result.data.data.email);
            // setPassword(result.data.data.password);
            // setcustomerData(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);
    

    return(
        <div className="containers">
           
            <div className="row">
                <div className="col-md-4">
                <Fade right big>
                <h2>Update Your Profile</h2>
                </Fade>

                <Fade right big>
            <form>
            <div class="form-group">
                <label >Firstname</label>
                <input type="text" placeholder='Firstname' className="form-control" value={firstname} onChange={e=>{setFirstname(e.target.value)}}/>
            </div>
            <br></br>

            <div class="form-group">
                <label >Lastname</label>
                <input type="text" placeholder='Lastname' className="form-control" value={lastname} onChange={e=>{setLastname(e.target.value)}} />
            
            </div>
            <br></br>
            <div class="form-group">
                <label >Number</label>
                <input type="text" placeholder='Number' className="form-control" value={number} onChange={e=>{setNumber(e.target.value)}} />
            </div>
            <br></br>
            <div class="form-group">
                <label>Email</label>
                <input type="text" placeholder='Email' className="form-control" value={email} onChange={e=>{setEmail(e.target.value)}} />
            </div>
            <br/>

            <button type="submit" className="btn btn-primary" onClick={updPro}>Update</button>
            </form>
            </Fade>

                </div>
            </div>
            <ToastContainer />
            
        </div>
    )
}

export default Update;