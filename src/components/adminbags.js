import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/bag.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Adminbag = (props) => {
 
  
  const [commentt, setComment]=useState("");

  
  const { addItem } = useCart();


const deleteBooking=(pid)=>{
   
    axios.delete("http://localhost:90/bag/delete/"+pid)
    .then(result=>{
        console.log(result)
        if(result.data.status){
            window.location.reload();
        }
    })
    .catch()

  }


  const [view, setView] = useState([]);
  useEffect(() => {
    displayBag();
   
  }, []);
  


  const displayBag = async () => {
    return await axios
      .get("http://localhost:90/bags/all")
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
    <div className="clipss">

    <div
      class="venuebody">
        {/* <video src='/videos/bags.mp4' autoPlay loop muted /> */}
      <h1 className="headingq">What's UP Baggie!!</h1>
      <div class="venuecont">
        {view.map((eachView) => {
          eachView.id=eachView._id
            return (
                <>
            <Flip right>
              <div class="cardy">
                <div class="cardedheader">

                <Link to={"/admin/single/" + eachView._id}><img id="post-img" 
                
                src={'http://localhost:90/'+ eachView.image} 
                            alt="post" class="cover"/> </Link>

                </div>

                <div class="cardedbody">
                  <br/>
                  <span class="tag tag-teal" >Bag Name:</span>
                  
                  <h5>{eachView.name} </h5>
                  
                  
                  <span class="tag tag-teal" >Bag Price:</span>
                
                  <p className="fontedd">{eachView.price}</p>
                  
                 
                  <span class="tag tag-teal" >Bag Details:</span>

              
                    <div className="containerrr">
                      

                    <div className="box-content-content">
                      
                    <p className="fontedd">{eachView.description}</p>
              <button className="btn btn-dark" onClick={()=>{deleteBooking(eachView._id)}}>Delete</button>
                    </div>
                    

                    </div>
                
                   
                  <br/>
                  
                  <div className="size">


                
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
export default Adminbag;