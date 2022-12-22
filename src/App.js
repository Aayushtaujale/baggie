
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
// import CategoryShowAdd  from './components/add_category';
// import Login from "./components/login";
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";
import Footer from './components/Footer';

function App() {
  return (


<CartProvider>
    <BrowserRouter>
    
    <div>
      <Header></Header>  
      <Mid></Mid>
      <Footer></Footer>
      

    
    </div>

    </BrowserRouter>
    </CartProvider>
//     <BrowserRouter>
// <CategoryShowAdd ></CategoryShowAdd >
    
//     {/* <Header></Header> */}

    



//     {/* <Home></Home> */}
//     {/* <HeroSection></HeroSection> */}
//     {/* <Banner></Banner> */}
//     {/* <Mid></Mid> */}
//     {/* <ToastContainer/> */}
   
//     {/* <Login></Login> */}


    
//     </BrowserRouter>
  
      
      
    
  );
}

export default App;
