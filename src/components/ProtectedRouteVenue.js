import { Navigate } from "react-router-dom";

function PrivateRouteVenue({children}){
    var isAuth;
    if(localStorage.getItem('ticket') && localStorage.getItem('userType')==='Venue'){
        isAuth=true
    }
    else{
        isAuth=false
    }
    return isAuth ? children : <Navigate to="/venuelogin"/>;
}

export default PrivateRouteVenue;
