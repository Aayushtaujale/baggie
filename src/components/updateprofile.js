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
    const[age, setAge]=useState('');
    const[email, setEmail]=useState('');
    // const[password, setPassword]=useState('');
   
    const config ={
        headers:{
            Authorization:'Bearer '+ localStorage.getItem('ticket')
        }
    }

    const updPro=(e)=>{
        e.preventDefault();
        if(firstname==="" || lastname==="" || age==="" || email===""){
            toast.error("Error Validations Failed");
            return;
        }
        const data = {
            firstname:firstname,
            lastname:lastname,
            age:age,
            email:email,
        }
        axios.put("http://localhost:90/customer/update",data,config)
        .then(result=>{
            notify("Profile Updated Successfully");
                
                setTimeout(() => {
                  window.location.replace("/profile");
                  
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
            setAge(result.data.data.age);
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
                <input type="text" className="form-control" value={firstname} onChange={e=>{setFirstname(e.target.value)}}/>
            </div>

            <div class="form-group">
                <label >Lastname</label>
                <input type="text" className="form-control" value={lastname} onChange={e=>{setLastname(e.target.value)}} />
            
            </div>

            <div class="form-group">
                <label >Age</label>
                <input type="text" className="form-control" value={age} onChange={e=>{setAge(e.target.value)}} />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" className="form-control" value={email} onChange={e=>{setEmail(e.target.value)}} />
            </div>
            <br/>

            <button type="submit" className="btn btn-primary" onClick={updPro}>Update</button>
            </form>
            </Fade>

                </div>
            </div>
            
        </div>
    )
}

export default Update;