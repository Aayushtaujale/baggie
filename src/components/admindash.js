import React from 'react';

import '../styles/admindash.css';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Button from 'react-bootstrap/Button';

function Admin () {

    const orders = () =>{ 
        window.location.replace("/venuedashboard");
      }

      const bags = () =>{ 
        window.location.replace("/adminbags");
      }


    
  return(
    <div>
        <Button className='buttonorder' variant="outline-warning" onClick={orders}>ORDERS</Button>{'         '}
        <Button className='buttonbags' variant="outline-warning" onClick={bags}>BAGS</Button>{'         '}

    </div>
  )
  };

export default Admin;