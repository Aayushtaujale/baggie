import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/adminproduct.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const AdminProduct = () => {
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

        
        // setMessage(response.data.msg); 
        // console.log("data")
        // console.log(data)
        // toast.success("Comment Successful");
        notify("Comment Successful")


        setTimeout(
          () => {
           
          
            window.location.reload();
          notify("Comment Successful")
          
          
        }, 
        
        
        1000);
        // notify("Comment Successful")
            // alert (response.data.msg);
          
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
    <div className="pahilo">
 <main className="">
    <div className="containe">

 <div class="tauko">

                

<img src={'http://localhost:90/'+bagdetails.image} className="img-thumbnail" id="single"/>



    
  
 </div>

 <div class="ready">
 <div class="rcolumnn">

<div class="saman">
  <span><h1>{bagdetails.name}</h1></span>
  
  <p id="paisa">
    {bagdetails.description}
  </p>
</div>

<div class="product-configuration">



</div>

<div class="product-pai">
  <span> Price: <span style={{color: "orange"}}> Rs.{bagdetails.price}</span></span>
 
  
  {/* <a class="cart-btn" onClick={() => addItem(bagdetails._id)}> Add to cart</a> */}
</div>
<br></br>


</div>

 </div>
 

</div>
<div className="botho">
        
<div className="daya">
          < div className="commenthiyo">
            <div class="comming">
                          
                          
                        <h1 className="sirshak"> Comments:</h1>


                             
                        </div>


                        <div className="show-com p-5">
                            <div className="show-commentsinside">
                           
                        {commentDetails.map((comments) => {

          return (
            <div className="khali">
                <div className="com-com">
                <div className="namedate"><span className="text-info">{comments.customerId.firstname} {comments.customerId.lastname} &nbsp; &nbsp; &nbsp; &nbsp; <span className="tarik"> {comments.date} </span> </span>  <p>{comments.comment}</p>
                
                
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


<ToastContainer />
    </div>
    
     
  );
};
export default AdminProduct;