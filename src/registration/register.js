import '../css/register.css';


const Register=()=>{
    
    
    return(
 
        <div className="containerfirst">
             
             <div className='containersecond'>
            <div className="row">
                <div className="col-md-9">
               

                <h2 className='h2'>Register Here</h2>
          
            <form>
            <div class="form-group">
               
                <label className='register-label' >Firstname</label>
               
                
                <input ttype="text"
                  className="register-input"  placeholder="Firstname"/>
               
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label' >Lastname</label>
                

                <input type="text"
                  className="register-input"  placeholder="Lastname" />
                
            
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Contact</label>
                

                <input type="text"
                  className="register-input" placeholder="Contact" />
                
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Address</label>
                

                <input type="text"
                  className="register-input" placeholder="Address" />
                
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Email</label>
                
                <input type="text"
                  className="register-input"

                  placeholder="Email"/>
                
            </div>
            <br/>
            <div class="form-group">
            
                <label className='register-label'>Password</label>
                

                <input type="text"
                  className="register-input"   placeholder="Password" />
                
            </div>
            <br/>

            <div class="form-group">
            
                <label className='register-label'>Confirm Password</label>
                

                <input type="text"
                  className="register-input"  placeholder="Confirm Password" />
                
            </div>
            <br/>
    
            
            <button type="submit" className="button">Register</button>
           
            </form>



                </div>
            </div>
            </div>
            
        </div>
    )


}

export default Register;