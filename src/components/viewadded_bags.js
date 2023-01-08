
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/baggie.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import Slider from "rc-slider";

const Viewbag = (props) => {
  const params = useParams();
    // const notify = (message) => toast.info('🦄 Wow so easy!', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   });
    const [venueid,setVenueid] = useState('');
    const [name, setName] = useState('');
  // const notify = (message) => toast.success(message);

  const [commentt, setComment]=useState("");

  
  const { addItem } = useCart();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };
  





  const [view, setView] = useState([]);
  useEffect(() => {
    displayBag();
    toast.info('🦄 OFFER OFFER OFFER! 20% off on New Year', {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      rtl:false
      });
  clearTimeout(toast.info)
  }, []);
  


  const displayBag = async () => {
    return await axios
      .get("http://localhost:90/bags/all", config)
      .then((response) => {
        // setMessage(response.data.message);
        const { data, success } = response.data;
        if (success) {
          setView(data);
         
        } else {
        }
      })
      .catch((e) => {
        console.log(e);
      });

    

  
  };
  return (
    <div className="clip">

    <div
      class="venues-body">
        {/* <video src='/videos/bags.mp4' autoPlay loop muted /> */}
      <div class="venues-container">
        <h1 className="heading">What's UP Baggie!!</h1>
        <Slider
        min={200}
        max={3000}
        value={view.price}
        onChange={(value) => console.log(value)}
      />
        {view.map((eachView) => {
          eachView.id=eachView._id
            return (
                <>
            <Flip right>
              <div class="cards">
                <div class="headeroff">

                <Link to={"/bagg/single/" + eachView._id}><img id="post-img" 
                
                src={'http://localhost:90/'+ eachView.image} 
                            alt="post" className="cover"/> </Link>

                </div>

                <div class="cards-body">
                  <br/>
                  <span class="tag tag-teal" >Bag Name:</span>
                  
                  <h5>{eachView.name} </h5>
                  
                  <br/>
                  <span class="tag tag-teal" >Bag Price:</span>
                
                  <p className="textetxt">{eachView.price}</p>
                  
                 
                  <span class="tag tag-teal" >Bag Details:</span>

              
                    <div className="containerrr">
                      

                    <div className="box-content-content">
                      
                    <p className="textetxt">{eachView.description}</p>
                    </div>
                    

                    </div>
                
                   
                  
                  
                  <div className="size">

                  <div className="custom">
                  <Link to="/custombag" class="tag tag-teal
                  ">Customize</Link>
                  </div>
                  <div className="links">
                  < p  class="tags
                  " onClick={() => addItem(eachView)}>ADD TO CART</p>
                  </div>
                  </div>
                </div>
              </div>
              <br/>

              
              </Flip>
            </>
          );
        })}
      </div>
    </div>
    <ToastContainer limit={1}/>
        </div>
  );
};
export default Viewbag;