import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const UpdateCategory=()=>{
    const  { pid }=useParams();

    const [categoryName, setCategoryName] = useState([]);
    const [categoryDetails, setCategoryDetails]= useState([]);

    
    const [categoryD, setCategoryD]= useState([]);
    const[cate, setCate]=useState([])
       
    useEffect(()=>{
        axios
        // .get("http://localhost:2099/blogpost/display")
        .get("http://localhost:90/categorys/"+ pid)
        
        .then((result)=>{
            console.log(result);
            
            setCategoryD(result.data.data);
            setCategoryName(result.data.data.categoryName)
            console.log(setCategoryName)
            console.log("nononono")
            setCategoryDetails(result.data.data.categoryDetails)
            console.log(setCategoryDetails)

            console.log("sdnfjjdf")
            console.log(result.data.data.categoryName)
            console.log(result.data.data.setCategoryDetails)
           })
        .catch()
    }, [])


    const updatec = (e) => {
        e.preventDefault();
        const data = {
          categoryName:categoryName,
          categoryDetails: categoryDetails,
          id: pid,
          // blogImage:blogImage
         
        };
        console.log(data);
        axios
          .put("http://localhost:90/cat/update", data)
          .then((result) => {
            console.log(result);
            alert("Category updated!")
        window.location.reload();

  
        //   window.location.reload();
            // setTitle(result.data.data.title);
            // setContent(result.data.data.content);
          })
          .catch();
      };

      useEffect(()=>{
        axios
          .get("http://localhost:90/category/display")
          .then((result) => {
            console.log("category")
            console.log(result);
    
            setCate(result.data.data);
            console.log(cate)
             setCategoryName(cate.categoryName)
            console.log("wath")
            setCategoryDetails(cate.setCategoryDetails)

            
        
            
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);
      

return(
    <body>
    <div className="ad-cat">


        <div className="sav-change">
            <div className="text-center"><h3 > Update {categoryD.categoryName}</h3></div>
            <form>      
              <input name="categoryName" type="text" class="feedback-input " placeholder="categoryName" value={categoryName} required onChange={(e)=>setCategoryName(e.target.value)}/>

              <input name="categoryDetails" type="text" class="feedback-input " placeholder="categoryName" value={categoryDetails} required onChange={(e)=>setCategoryDetails(e.target.value)}/>   


              <div className="pt-5"><button type="submit" className="btn btn-primary pt"  onClick={updatec}> Post</button></div>
            </form>
    </div>


{/* This is the right side of the page where categories are shown------------------------------------------------------------------------------------------------------------------------------ */}

    <div className="show-cat">
            <div>
                <h3> Categories</h3>
                {cate.map((categoryy) => {
          return (
 
                         <div className="">
                         <h6 id="chose-cat" className="cate-cat pt-2">{categoryy.categoryName} <Link to={"/updatecate/" + categoryy._id}>nbsp; Update</Link> 
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

export default UpdateCategory;