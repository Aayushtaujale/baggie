import "../styles/add_category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUpload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";


const CategoryShowAdd = () => {
  const [message, setMessage] = useState("");

  const [categoryName, setCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const [categoryList, setCategoryList] = useState([]);
  
  const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ticket"),
      },
    };
  const addCategory = (e) => {
    e.preventDefault();

    // console.warn(categoryName, categoryDetails, categoryImage);
    // console.warn(title, content)
    const formData = new FormData();

    formData.append("categoryName", categoryName);
    formData.append("categoryDetails", categoryDetails);
    formData.append("categoryImage", categoryImage);

    axios
      .post("http://localhost:90/admin/addcategory", formData, config)
      .then((response) => {
        //see in console. data is stored in data:{token:.............}
        // setMessage(response.data.msg);
        // alert("Category succesfully posted!");
        
        window.location.reload();
        toast.error("Category succesfully posted!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(" All fields required");
        // alert(" All fields required" + " Try again!");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/category/display", config)
      .then((result) => {
        console.log("category");
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
          alert("Post deleted!");
          window.location.reload();
        }
      });
  };

  return (
    <body>
      <div className="ad-cat">
        <div className="sav-change">
          <div className="text-center">
            <h2 style={{ color: "#9F2893", textAlign: "center" }}>
              {" "}
              Add Category
            </h2>
          </div>
          {categoryImage && (
            <div className="imagebox">
              <div className="imagebox2">
                <div className="imagebox3">
                  <img
                    className="upimg"
                    src={URL.createObjectURL(categoryImage)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          <form>
            <div className="a-img">
              <label htmlFor="fileInput">
                <p className="imagee">
                  Upload Image{" "}
                  <FontAwesomeIcon className="icon" icon={faUpload} />
                  {/* <p className="pluss">+</p> */}
                </p>
              </label>
              <div className="">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setCategoryImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="categoryN">
              <input
                type="text"
                placeholder="Title"
                className="writeInputt"
                autoFocus={true}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            <div className="a-bott">
              <textarea
                placeholder="Description"
                type="text"
                className="writeInputt"
                onChange={(e) => setCategoryDetails(e.target.value)}
              ></textarea>
            </div>

            <div className="pt-5">
              <div
                className="pt-5"
                style={{ display: "flex" }}
              >
                <button onClick={addCategory} className="writeSubmit">
                  {" "}
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* This is the right side of the page where categories are shown------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="show-cat">
          <div style={{ color: "#9F2893", textAlign: "center" }}>
            <h3> Categories</h3>
            {categoryList.map((categoryy) => {
              return (
                <div className="">
                  <h6 id="chose-cat" className="cate-cat pt-2">
                    {" "}
                    <h6 id="c-n">{categoryy.categoryName}</h6>{" "}
                    <h6 id="c-u">
                      <Link to={"/updatecate/" + categoryy._id}>Update</Link>
                    </h6>
                    <h6 id="c-d">
                      <a
                        href=""
                        className=" text-danger"
                        onClick={() => {
                          deleteCategory(categoryy._id);
                        }}
                      >
                          
                      </a>
                    </h6>
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
        <ToastContainer />
      </div>
    </body>
  );
};

export default CategoryShowAdd;
