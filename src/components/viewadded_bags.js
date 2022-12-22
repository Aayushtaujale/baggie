import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/bag.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";


const Viewbag = (props) => {
  const params = useParams();
    const notify = (message) => toast.success(message);
    const [venueid,setVenueid] = useState('');
    const [name, setName] = useState('');
  // const notify = (message) => toast.success(message);
  
  const { addItem } = useCart();
  // notify("Added To Cart")

//   const config ={
//     headers:{
//         Authorization:'Bearer '+localStorage.getItem('ticket')
//     }
// }

//   const Viewbag=(e)=>{
//     e.preventDefault();
//     const data = {
//         venueid: params.id,
//         name : name,
    
//     }
    
//     axios.post('http://localhost:90/booking/book',data, config)
//     .then(response=>{
//         console.log(response);
//         // setMessage(response.data.message);
//         console.log(response.data.message)
//         notify("Added to cart Successfully");
            
        
        
//     })
//     .catch(e=>{
//         console.log(e)
//     })
//   }


  

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
    <div className="clip">

    <div
      class="venues-body">
        {/* <video src='/videos/bags.mp4' autoPlay loop muted /> */}
      <h1 className="heading">What's UP Baggie!!</h1>
      <div class="venues-container">
        {view.map((eachView) => {
          eachView.id=eachView._id
            return (
                <>
            <Flip right>
              <div class="cards">
                <div class="cards-header">
                <img src={'http://localhost:90/'+eachView.image} className="img-thumbnail" />
                </div>

                <div class="cards-body">
                  <span class="tag tag-teal" >Bag Name:</span>
                  
                  <h5>{eachView.name} </h5>
                  <br></br>
                  <br/>
                  <span class="tag tag-teal" >Bag Price:</span>
                
                  <p>{eachView.price}</p>
                  <br/>
                  <span class="tag tag-teal" >Bag Details:</span>
                  
                  <p>{eachView.description}</p>
                  <div className="custom">
                  <Link to={"/custombag"} class="tag tag-teal
                  ">Customize</Link>
                  </div>
                  <div className="links">
                  < p  class="tags
                  " onClick={() => addItem(eachView)}>ADD TO CART</p>
                  </div>
                </div>
              </div>

              
              </Flip>
            </>
          );
        })}
      </div>
    </div>
    <ToastContainer />
        </div>
  );
};
export default Viewbag;