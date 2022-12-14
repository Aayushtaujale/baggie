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

      const addbags = () =>{ 
        window.location.replace("/viewbag");
      }

      const addcat = () =>{ 
        window.location.replace("/addcategory");
      }


    
  return(
    <div className='backscreen'>
        <Button className='buttonorder' variant="outline-warning" onClick={orders}>ORDERS</Button>{'         '}
        <Button className='buttonbags' variant="outline-warning" onClick={bags}>BAGS</Button>{'         '}
        <Button className='buttonaddbags' variant="outline-warning" onClick={addbags}>ADD BAGS</Button>{'         '}
        <Button className='buttonaddcat' variant="outline-warning" onClick={addcat}>ADD CATEGORY</Button>{'         '}

    </div>
  )
  };

export default Admin;