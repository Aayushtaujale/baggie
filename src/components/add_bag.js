import { useState } from 'react';
import axios from 'axios';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUpload } from "@fortawesome/free-solid-svg-icons";

import '../styles/add_bag.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Addbag=()=>{
    const [message,setMessage] = useState('');
    const [image, setImage] =useState('');
    const [name, setName] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');


    // const notify = (message) => toast.success(message);

    const config ={
        headers:{
            Authorization:'Bearer'+localStorage.getItem('ticket')
        },
    };
    const addBag=(e)=>{
       
        e.preventDefault();
        if(name==="" || price==="" || description===""){
            toast.error("Error Validations Failed");
            return;
        }

        const formData=new FormData();
        formData.append("image",image)
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);
        
        // const data = {
        //     name : name,
        //     price: price,
        //     description : description,
        //     image:image
        // }
        axios.post('http://localhost:90/bag/add',formData)
            .then((response)=>{
            
            // setMessage(response.data.message);
            // console.log(response.data.message)
            toast.success("Bag succesfully added!");
            
           
            
                
            setTimeout(() => {
                window.location.replace("/viewadded_bags");
            }, 2000);
            
        })
        .catch(e=>{
            console.log(e);
            toast.error("Fill All Fields");
            
        });
    };
    

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
                   <h1 className='labelname'>ADD BAGS</h1>
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
                 {image && (
            <div className="imagebox">
              <div className="imagebox2">
                <div className="imagebox3">
                  <img
                    className="upimg"
                    src={URL.createObjectURL(image)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
                <form className='bb'>
                <div className="a-img">
              <label htmlFor="fileInput">
                <p className="imagee">
                  Upload Image{" "}
                  <FontAwesomeIcon className="icon" icon={faUpload} />
                  {/* <p className="pluss">+</p> */}
                </p>
              </label>
              <div className="">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
                
                <Bounce top>
                
                <div className="form-groups">
                            {/* <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
                            <br/>
                       
                            <input type="submit" className="abc" /> */}


                        </div>
<br></br>
                <div class="form-floating mb-4">

           

                <label >Bag Name</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Bag Name"/>
            </div>
            </Bounce>

              <br></br>


            <Bounce bottom>
            <div class="form-floating mb-4">
                <label>Price</label>
                <input type="text" className="form-control"  onChange={(e)=>setPrice(e.target.value)} placeholder="Price" />
            </div>
            </Bounce>
            <br></br>

            <Bounce top>
            <div class="form-floating mb-4">
                <label>Description</label>
                <input type="text" className="form-control"  onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
            </div>
            </Bounce>
            <br></br>

            
            <br/>

            
            

           
    
            <Bounce bottom>
            <div class="d-flex justify-content-center">
            <button type="submit" className="btn" onClick={addBag}>Add Bag</button>
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
            <div className='cards-body'>
            <img url=''></img>
            
            
           
            </div>
            </Bounce>
            </div>
            <ToastContainer />
            </div>

              
         
    );

}

export default Addbag;