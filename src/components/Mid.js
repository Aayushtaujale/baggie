import {Route, Routes} from "react-router-dom";
import Register from "./register";
import Login from "./login";

import CategoryShowAdd from "./add_category"
import UpdateCategory from "./cat_update";
// import Venue from "./add_bag";
import View from "./view_bag";
import Addbag from "./add_bag";
import Viewbag from "./viewadded_bags";
import Picker from "./custombag";
import Cart from "./add_to_cart";
import Khalti from "./khalti";
import Home from "./Home";
import ContactUs from "./Contact";
import DisplayBooking from "./displaybookings";
import Booking from "./booking";
import Profile from "./profile";
import Update from "./updateprofile";
import Venuelogin from "./venuelogin";
import SingleProduct from "./singleProduct";
import Venue from "./venue";
import VenueDashboard from "./venuedashboard";
import PrivateRoute from "./ProtectedRoute";
import PrivateRouteVenue from "./ProtectedRouteVenue";
import TryButton from "./try";

const Mid=()=>{
    return (
      <Routes>
        {/* <Route path="/" exact component={<Home/>}/> */}
        {/* <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/venues" element={<Venues/>}/>
            <Route path="/Contact" element={<ContactUs/>}/> */}
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/addtocart" element={
        <PrivateRoute>
          <Cart />
          </PrivateRoute>
          } />
        <Route path="/custombag/:id" element={<Picker />} />
        <Route path="/viewadded_bags" element={<Viewbag />} />
        <Route path="/viewbag" element={<View />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/addbag" element={
         <PrivateRouteVenue>
         <Addbag />
         </PrivateRouteVenue>} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/addcategory" element={
         
          <CategoryShowAdd />
         } />
        <Route path="/payment" element={<Khalti />} />
        <Route path="/displaybookings" element={
            <PrivateRoute>
            <DisplayBooking/>
            </PrivateRoute>
            }/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/updateprofile" element={
            <PrivateRoute>
            <Update/>
            </PrivateRoute>
            }/>
        <Route path="/venuelogin" element={<Venuelogin/> }/>
        <Route path="/profile" element={
            <PrivateRoute>
            <Profile/>
            </PrivateRoute>}/>


        <Route path="/bagg/single/:pid" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="/venue" element={<Venue/>}/>
        <Route path="/try" element={<TryButton/>}/>
        <Route path="/venuedashboard" element={<VenueDashboard/>}/>
        <Route path="/booking/:id" element={
                <PrivateRoute>
                <Booking/>
                </PrivateRoute>
            }/>
        <Route
          path="/updatecate/:pid"
          element={<UpdateCategory></UpdateCategory>}
        ></Route>
      </Routes>
      
    );
}

export default Mid;