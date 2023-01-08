import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/views.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";

const View = () => {

  const [view, setView] = useState([]);
  useEffect(() => {
    displayView();
  }, []);



  const displayView = async () => {
    return await axios
      .get("http://localhost:90/category/all")
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
    <div
      class="admin-body">
      <h1 className="h1">Available Category</h1>
      <div class="admin-container">
        {view.map((eachView) => {
          return (
            <>
            <Flip right>
              <div class="adcards">
                <div class="adcardsheader">
                <img src={'http://localhost:90/'+eachView.categoryImage} className="img-thumbnail" />
                </div>

                <div class="cardsadbody">
                  <span class="tag tag-teal" >Category Name:</span>
                  <br/>
                  <h5>{eachView.categoryName} </h5>
                  {/* <p>{eachView.address}</p>
                  <p>{eachView.phone}</p> */}
                  <div className="linkedin">
                  <Link to={"/addbag"} class="tag tag-teal
                  ">ADD</Link>
                  </div>
                </div>
              </div>
              </Flip>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default View;