import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/profile.css';
import Fade from 'react-reveal/Fade';

const Profile=()=>{

    const [image, setImage] =useState('');
    const[customerdata, setcustomerData]=useState('');
    const config ={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('ticket')
        }
    }

    const updateProfile=(e)=>{
        e.preventDefault();

        

        const profilePic=new FormData();
        profilePic.append('pic',image);

        axios.put('http://localhost:90/customer/picture/update',profilePic,config)
        .then(result=>{
            console.log(result);
            
        })
        .catch(e=>{
            console.log(e)
        })
    }


    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard", config)
        .then(result=>{
            console.log(result.data.data);
            setcustomerData(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    return(
        <div className="container-main">
            <div className="main">
            <Fade right big>
            <h1 className="topicmain">MY PROFILE</h1>
            </Fade>
            <Fade top big>
            <div className="row">
                <div className="col-md-6">
                    
                    <form>
                        
                        <div className="form-groups">
                            <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
                            <br/>
                       
                       
                            <input type="submit" className="btn btn-dark" onClick={updateProfile}/>


                        </div>


                        
                    </form>
                </div>
                <div className="details">
                <div class="col-md-6">
                    <div className="col-md-9">

                    
                    <p ><img src={'http://localhost:90/'+customerdata.picture} className="img-thumbnail" /></p>
                    </div>
                  
                    <p>Name: {customerdata.firstname} {customerdata.lastname}</p>
                    <p>Email: {customerdata.email}</p>
                    <p>Number: {customerdata.number}</p>
                    {/* <p>Address: {customerdata.address}</p> */}

                    <p><Link to="/updateprofile">Update profile</Link></p>
                </div>
                </div>
            </div>
            </Fade>
            </div>
        </div>
    )
}

export default Profile;