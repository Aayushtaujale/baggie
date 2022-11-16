import {Route, Routes} from "react-router-dom";
import Register from "./register";
import Login from "./login";

import CategoryShowAdd from "./add_category"
const Mid=()=>{
    return(
        <Routes>

            {/* <Route path="/" exact component={<Home/>}/> */}
            {/* <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/venues" element={<Venues/>}/>
            <Route path="/Contact" element={<ContactUs/>}/> */}
           
            

            
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/addcategory" element={<CategoryShowAdd></CategoryShowAdd>}></Route>
            
        </Routes>
    )
}

export default Mid;