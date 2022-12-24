import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/bag.css";
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";


const SingleProduct = () => {
  const { pid } = useParams();
    const notify = (message) => toast.success(message);
    const [venueid,setVenueid] = useState('');
    const [name, setName] = useState('');
  // const notify = (message) => toast.success(message);

  const [bagdetails, setBagdetails]= useState("");
  const [commentt, setComment]=useState("");
  const[message, setMessage]=useState('');
  
  const { addItem } = useCart();
  // notify("Added To Cart")

//   const config ={
//     headers:{
//         Authorization:'Bearer '+localStorage.getItem('ticket')
//     }
// }

// const commentpost=(e)=>{
//     e.preventDefault();
//     console.log(pid)

//     const data = {
//       comment:commentt,
//       blogId:pid

//     };

    
        
//         axios
//         .post("http://localhost:90/comment/"+pid,data )
//         .then(response=>{
//             //see in console. data is stored in data:{token:.............}
//             setMessage(response.data.msg);       

//                 alert (response.data.msg);
//                 window.location.reload();
            
//         })
//         .catch(e=>{
//             console.log(e)
//             alert (" All fields required" + " Try again!")
//         })
//     }


  

useEffect(()=>{
    axios
    // .get("http://localhost:2099/blogpost/display")
    .get("http://localhost:90/bagg/single/"+ pid)
    
    .then((result)=>{
        console.log(result);
        setBagdetails(result.data.data);
    })
    .catch()
}, [])


  return (
    <div className="clip">

    <div
      class="venues-body">
        {/* <video src='/videos/bags.mp4' autoPlay loop muted /> */}
      <h1 className="heading"> {bagdetails.name} </h1>
      <div class="venues-container">
        
          
            
        
        
        
      </div>
    </div>
    <ToastContainer />
        </div>
  );
};
export default SingleProduct;