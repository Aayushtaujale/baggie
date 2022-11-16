// // we need axios package to connect this frontend to the backend
// //install cors at backend

// import "../styles/add_category.css";

// import axios from "axios";
// import { useEffect, useState } from "react";

// const AddCategory=  ()=>{
//     const [title, setTitle] = useState('');
//     const[categoryImage, setCategoryImage]= useState('');
//     const [description, setDescription] = useState('');

  

    
//   //this is for displaying in console
// //   useEffect(()=>{
// //       axios
// //         .get("http://localhost:", config)
// //         .then((result) => {
// //           console.log("category")
// //           console.log(result);
  
// //           setCategoryDetails(result.data.data);
// //         })
// //         .catch((e) => {
// //           console.log(e);
// //         });
// //     }, []);
    


  
//    const addcategory=(e)=>{
//     e.preventDefault();

//         console.warn(title, description, categoryImage)
//         // console.warn(title, content)
//         const formData= new FormData();
//         formData.append("title" ,title);
//         formData.append("categoryImage" ,categoryImage);
//         formData.append("description" , description);



//         // const config = {
//         //     headers: {
//         //       Authorization: "Bearer " + localStorage.getItem("ticket"),
//         //     },
//         //   };


//     //for posting cateogory    
//         // axios
//         // .post("http://",formData , config)
//         // .then(response=>{
//         //     //see in console. data is stored in data:{token:.............}
//         //     setMessage(response.data.msg);       

//         //         alert ("Category succesfully posted!");

//         //         window.location.reload();
            
//         // })
//         // .catch(e=>{
//         //     console.log(e)
//         //     alert (" All fields required" + " Try again!")
//         // })
//     }

   

//     return (
// <body>
     
     
     
//       <div className="a-p pt-5">
//         <div className="for-padding">
        
//        {/* {categoryImage && ( */}
//         <div className="hihi"> 

//           <div className="imi-1">
//             <div className="imi-2">
//          <img className="imimi"  
         
//         //  src={URL.createObjectURL(categoryImage)}
         
//          alt="" />
// </div>
// </div>
// </div>

//      {/*})*/}
      

//         <div className="t-top">
//       <div className="a-topp p-5">
        
//         <div className="a-img"><label htmlFor="fileInput">
//         <p className="pluss">+</p>
//         <p>Image</p>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setCategoryImage(e.target.files[0])}
//           /></div>


//         <div className="a-tit"><input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//             onChange={e=>setTitle(e.target.value)}
//           /></div>


// </div>
//       </div>

//       <div className="a-bott">
//       <textarea
//             placeholder="Tell something about the characterstics..."
//             type="text"
//             className="writeInput writeText"
//             onChange={e=>setDescription(e.target.value)}
//         ></textarea>

//       </div>
//       <div className="pt-4">


//         <button className="writeSubmit" onClick={addcategory}>
//           Submit
//         </button>
//        </div>

//        </div>

      
        
// </div>
//             </body>
            
        
//           );
// }

// export default AddCategory;





import "../styles/add_category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CategoryShowAdd = () => {
   
    const [categoryName, setCategoryName] = useState('');
    const[message, setMessage]=useState('');
    const [categoryDetails, setCategoryDetails]= useState([]);
    const [categoryImage, setCategoryImage]=useState([]);


    
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("ticket"),
    //   },
    // };


  
  //  const addCategory=(e)=>{
  //   e.preventDefault();

  //   e.preventDefault();
  //   const data = {
  //     categoryName: categoryName
  //   };
        
  //   if(categoryName!=""){
  //       axios
  //       .post("http://localhost:2099/admin/addCategory",data , config)
  //       .then(response=>{

          
  //           //see in console. data is stored in data:{token:.............}
  //           setMessage(response.data.msg);       

  //               alert (response.data.msg);
  //               window.location.reload();
            
  //       })
  //     }

  //     else{
  //       alert("Field cannot be empty!")

  //     }



  //   }


  
  
  
  // useEffect(()=>{
  //     axios
  //       .get("http://localhost:2099/category/display", config)
  //       .then((result) => {
  //         console.log("category")
  //         console.log(result);
  
  //         setCategoryDetails(result.data.data);
        
          
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);
    



    //delete category
    // const deleteCategory = (pid) => {
    //   const data = {
    //     id: pid,
    //   };
    //   axios
    //     .delete("http://localhost:2099/category/delete/" + pid, config)
    //     .then((result) => {
    //       console.log(result);
    //       if (result.data.status) {
    //         alert("Post deleted!")
    //         window.location.reload();
    //       }
    //     });
    // };




    return(
      <body>
       <div className="ad-cat">

<div></div>
           <div className="sav-change">
               <div className="text-center"><h2 style={{color: "#9F2893",  textAlign: 'center' }} > Add Category</h2></div>
       <form> 
<div className="nandi" style={{display: "flex" , justifyContent: "space-between"}}>      
 
 
 <div ><input name="categoryName" type="text" class="feedback-input " placeholder="categoryName" required onChange={(e)=>setCategoryName(e.target.value)}/>  
  </div>

    <div className="a-img"><label htmlFor="fileInput" style={{display: "flex" , justifyContent: "space-between"}}>
       <p className="pluss">+</p>
       <p>Image</p>
         </label>
         <input
           type="file"
           id="fileInput"
           style={{ display: "none" }}
           onChange={(e) => setCategoryImage(e.target.files[0])}
         /></div>

</div> 
 {/* <textarea name="text" class="feedback-input" placeholder="Comment"></textarea> */}
 

 <div className="a-bott">
      <textarea
            placeholder="Tell something about the characterstics..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setCategoryDetails(e.target.value)}
        ></textarea>

      </div>
<div className="pt-5">
 <div className="pt-5" style={{display: "flex" , justifyContent: "center"}}><button type="submit" className="btn btn-primary pt"  > Post</button></div>
</div>

</form>
       </div>



       <div className="show-cat">
           <div style={{color: "#9F2893",  textAlign: 'center' }}>
               <h3> Categories</h3>
               {/* {categoryDetails.map((categoryy) => {
         return (
                       
                        <div className="">
                         
                        <h6 id="chose-cat" className="cate-cat pt-2">  <h6 id="c-n">{categoryy.categoryName}</h6> <h6 id="c-u"><Link to={"/updatecate/" + categoryy._id}>Update</Link>
                        
                         </h6>
                             
                        <h6 id="c-d"><a href="" className=" text-danger"
   onClick={() => {
     deleteCategory(categoryy._id);}}
   >delete</a></h6>
                           </h6>
                         
                        
                           </div>
                           
                           
                     
                       );
                   })} */}
           </div>
          



       </div>

      

       </div>



      </body>
   )

}

export default CategoryShowAdd