import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/catupdate.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCategory = () => {
  const notify = (message) => toast.success(message);
  const { pid } = useParams();
  const [categoryName, setCategoryName] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryId, setId] = useState("");
  const [categoryD, setCategoryD] = useState([]);
  const [cate, setCate] = useState([]);


  const changeImage = (e) => {
    if(categoryName===" " || categoryDetails===" "){
      toast.error("Error Validations Failed");
      notify("error Validations Failed");
      return;
  }
    
    e.preventDefault();
    const form = new FormData();
    form.append("id", categoryId);
    form.append("pic", categoryImage);
    axios.post("http://localhost:90/category/picture/update", form);
    window.location.reload();
  };
  useEffect(() => {
    axios
      // .get("http://localhost:2099/blogpost/display")
      .get("http://localhost:90/categorys/" + pid)
      .then((result) => {
        console.log(result);
        setCategoryD(result.data.data);
        setCategoryName(result.data.data.categoryName);
        setId(result.data.data._id);
        setCategoryImage(result.data.data.categoryImage);
        setCategoryDetails(result.data.data.categoryDetails);
        console.log(setCategoryDetails);
        setId(result.data.data._id);
        setCategoryImage(result.data.data.categoryImage);
        console.log("sdnfjjdf");
        console.log(result.data.data.categoryName);
      })
      .catch();
  }, []);
  const updatec = (e) => {
    e.preventDefault();


    

    const data = {
      categoryName: categoryName,
      categoryDetails: categoryDetails,
      id: pid,
      // blogImage:blogImage
    };
    console.log(data);
   
      axios.put("http://localhost:90/cat/update", data).then((result) => {
        console.log(result);
       

         setTimeout(() => {
           
          toast.success("Category updated!");
            
              
            }, 
            window.location.reload(),
            5000);
            toast.success("Category updated!");
        //   window.location.reload();
        // setTitle(result.data.data.title);
        // setContent(result.data.data.content);
      });
    
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/category/display")
      .then((result) => {
        console.log("category");
        console.log(result);
        setCate(result.data.data);
        console.log(cate);
        setCategoryName(cate.categoryName);
        console.log("wath");
        setCategoryDetails(cate.setCategoryDetails);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <body>
      <div className="ad-cat">
        <div className="sav-change">
          <div className="text-center">
            {" "}
            <h2 style={{ color: "#9F2893", textAlign: "center" }}>
              Update {categoryD.categoryName}
            </h2>
          </div>
          <div className="a-img">
            <label htmlFor="fileInput">
              <div className="hihi-1">
                <div className="imi-1">
                  <div className="imi-2">
                    <img
                      className="imimi1"
                      src={"http://localhost:90/" + categoryImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <p className="pluss">+</p>
              <p> Change Image</p> */}
            </label>
            {/* <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setCategoryImage(e.target.files[0])}
            /> */}
          </div>
          {/* <button className="change" style={{ backgroundcolor: "#9F2893" }} onClick={changeImage}>
            Change Image
          </button> */}
          <form>
            <input
              name="categoryName"
              type="text"
              class="feedback-input "
              placeholder="Category Name"
              
              required
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <input
              name="Category Details"
              type="text"
              class="feedback-input "
              placeholder="Category Details"
           
              required
              onChange={(e) => setCategoryDetails(e.target.value)}
            />
            <div className="pt-5">
              <button
                type="submit"
                className="btn btn-primary pt"
                onClick={updatec}
              >
                {" "}
                Update
              </button>
            </div>
          </form>
        </div>
        {/* This is the right side of the page where categories are shown------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="show-cat">
          <div>
            <h3 style={{ color: "#9F2893", textAlign: "center" }}>
              Categories
            </h3>
            {cate.map((categoryy) => {
              return (
                <div className="">
                  <h6 id="chose-cat" className="cate-cat pt-2">
                    {categoryy.categoryName}{" "}
                    <Link to={"/updatecate/" + categoryy._id}>Update</Link>
                  </h6>
                </div>
              );
            })}
          </div>
         <ToastContainer />
        </div>
      </div>
    </body>
  );
};
export default UpdateCategory;