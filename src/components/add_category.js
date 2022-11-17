
import "../styles/add_category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CategoryShowAdd = () => {
   
    const [categoryName, setCategoryName] = useState('');
    const[message, setMessage]=useState('');
    const [categoryDetails, setCategoryDetails]= useState([]);

    const [categoryList, setCategoryList]= useState([]);



    const addCategory=(e)=>{
        e.preventDefault();
    
            console.warn(categoryName, categoryDetails)
            // console.warn(title, content)
            const formData= new FormData();
          
            formData.append("categoryName" ,categoryName);
            formData.append("categoryDetails" , categoryDetails);
            // formData.append("categoryImage" , categoryImage);
    
            // const config = {
            //     headers: {
            //       Authorization: "Bearer " + localStorage.getItem("ticket"),
            //     },
            //   };
            axios
            .post("http://localhost:90/admin/addcategory",{categoryName,categoryDetails}  )
            .then(response=>{
                //see in console. data is stored in data:{token:.............}
                setMessage(response.data.msg);       
    
                    alert ("Category succesfully posted!");
    
                    window.location.reload();
                
            })
            .catch(e=>{
                console.log(e)
                alert (" All fields required" + " Try again!")
            })
        };


  useEffect(()=>{
      axios
        .get("http://localhost:90/category/display")
        .then((result) => {
          console.log("category")
          console.log(result);
  
          setCategoryList(result.data.data);
        
          
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
    
  

    
    //delete category
    const deleteCategory = (pid) => {
      const data = {
        id: pid,
      };
      axios
        .delete("http://localhost:90/category/delete/" + pid)
        .then((result) => {
          console.log(result);
          if (result.data.status) {
            alert("Post deleted!")
            window.location.reload();
          }
        });
    };

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

    {/* <div className="a-img"><label htmlFor="fileInput" style={{display: "flex" , justifyContent: "space-between"}}>
       <p className="pluss">+</p>
       <p>Image</p>
         </label>
         <input
           type="file"
           id="fileInput"
           style={{ display: "none" }}
           onChange={(e) => setCategoryImage(e.target.files[0])}
         />
         
         
         </div> */}
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
 <div className="pt-5"  style={{display: "flex" ,
  justifyContent: "center"}}><button onClick={addCategory}  className="writeSubmit" > Post</button></div>
</div>

</form>
       </div>
       <div className="show-cat">
           <div style={{color: "#9F2893",  textAlign: 'center' }}>
               <h3> Categories</h3>
               {categoryList.map((categoryy) => {
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
                   })}
           </div>
          



       </div>

      

       </div>



      </body>
   )

}

export default CategoryShowAdd;