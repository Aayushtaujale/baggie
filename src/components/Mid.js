import {Route, Routes} from "react-router-dom";
import Register from "./register";
import Login from "./login";

import CategoryShowAdd from "./add_category"
import UpdateCategory from "./cat_update";
import Venue from "./add_bag";
import View from "./view_bag";
import Addbag from "./add_bag";
const Mid=()=>{
    return(
        <Routes>

            {/* <Route path="/" exact component={<Home/>}/> */}
            {/* <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/venues" element={<Venues/>}/>
            <Route path="/Contact" element={<ContactUs/>}/> */}
           
            

           <Route path="/viewbag" element={<View/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addbag" element={<Addbag/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/addcategory" element={<CategoryShowAdd/>}/>

            <Route path="/updatecate/:pid" element={<UpdateCategory></UpdateCategory>}></Route>
            
            
        </Routes>
    )
}

export default Mid;