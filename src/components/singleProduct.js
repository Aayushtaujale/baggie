import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/singleproduct.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";


const SingleProduct = () => {
  const { pid } = useParams();
    const notify = (message) => toast.success(message);
    
    const [commentt, setComment]=useState("");
  // const notify = (message) => toast.success(message);

  const [bagdetails, setBagdetails]= useState("");
  const [commentDetails, setCommentDetails]=useState([]);

  const[message, setMessage]=useState('');
  
  const { addItem } = useCart();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };



const commentpost=(e)=>{
    e.preventDefault();
    console.log(pid)
    console.log(commentt)
    

    const data = {
      comment:commentt,
      bagId:pid,
      

    };
    if(commentt!=""){
      axios
      .post("http://localhost:90/comment/"+pid, data , config)

      .then(response=>{

        
        setMessage(response.data.msg); 
        console.log("data")
        console.log(data)


            alert (response.data.msg);
            window.location.reload();
          
      })
    }

    else{
      alert("Field cannot be empty!")

    }



  }
    
      




  
  useEffect(()=>{
    axios
    .get("http://localhost:90/bagg/single/"+ pid, config)
    
    .then((result)=>{
        console.log(result);
        setBagdetails(result.data.data);
    })
    .catch()
}, [])


useEffect(()=>{
    axios
      .get("http://localhost:90/comment/display/" +pid, config)
      .then((result) => {
        console.log(pid)
        console.log("comennnt")
        console.log(result);

        setCommentDetails(result.data.data);
        // console.log(commentDetails)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  return (
    <div>
 <main className="">
    <div className="container">

 <div class="cards-headerr">

                

<img src={'http://localhost:90/'+bagdetails.image} className="img-thumbnail" id="single"/>



    
  
 </div>

 <div class="right-column">
 <div class="right-columnn">

<div class="product-description">
  <span><h1>{bagdetails.name}</h1></span>
  
  <p id="centerrr">
    {bagdetails.description}
  </p>
</div>

<div class="product-configuration">



</div>

<div class="product-price">
  <span> Price: <span style={{color: "orange"}}> Rs.{bagdetails.price}</span></span>
 
  
  {/* <a class="cart-btn" onClick={() => addItem(bagdetails._id)}> Add to cart</a> */}
</div>
<br></br>

<div className="linkkk"  style={{display: "flex"}}>
                  < p  class="tags  
                  " onClick={() => addItem(bagdetails._id)}><br></br> &nbsp; &nbsp; &nbsp; &nbsp; ADD TO CART</p>
                  </div>
</div>

 </div>
 

</div>
<div className="bottomm">
        
<div className="rightt">
          < div className="commentho">
            <div class="addComments">
                          
                            <input type="text"
                                   class="text" id="innn"
                                   placeholder="Add a comment..." required onChange={(e)=>setComment(e.target.value)}/>

<div className="pt"><button  className="write" onClick={commentpost}> Post</button></div>


                             <button>

    </button>
                        </div>


                        <div className="show-comments p-5">
                            <div className="show-commentsinside">
                           
                        {commentDetails.map((comments) => {

          return (
            <div className="c-section">
                <div className="com-com">
                <div className="namedate"><span className="text-info">{comments.customerId.firstname} {comments.customerId.lastname} &nbsp; &nbsp; &nbsp; &nbsp; <span className="dateee"> {comments.date} </span> </span>  <p>{comments.comment}</p>
                
                
                </div>

                    </div>
                    
                



                </div>
            
          )})}
          </div>

                        </div>

            </div>

        </div>

</div>

</main>







{/*  */}



    </div>
    
     
  );
};
export default SingleProduct;