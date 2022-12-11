import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/bag.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Viewbag = () => {
  const { addItem } = useCart();

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
                  <Link to={"/"} class="tag tag-teal
                  ">Customize</Link>
                  </div>
                  <div className="links">
                  <Link to={"/"} class="tag tag-teal
                  " onClick={() => addItem()}>ADD TO CART</Link>
                  </div>
                </div>
              </div>

              
              </Flip>
            </>
          );
        })}
      </div>
    </div>
        </div>
  );
};
export default Viewbag;