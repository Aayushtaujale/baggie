
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import AddCategory from './components/add_category';
import Login from "./components/login";
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>

    
    {/* <Header></Header> */}
    <AddCategory></AddCategory>
    {/* <Home></Home> */}
    {/* <HeroSection></HeroSection> */}
    {/* <Banner></Banner> */}
    {/* <Mid></Mid> */}
    {/* <ToastContainer/> */}
   
    {/* <Login></Login> */}


    
    </BrowserRouter>
  
      
      
    
  );
}

export default App;
