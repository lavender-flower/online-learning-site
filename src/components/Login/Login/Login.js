import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    return (
  <>

<div class="container-o">
  <img src="images/login.jpg" width='100%' alt="Avatar" class="image"  style={{filter: "brightness(45%)"}}/>
  <div class="overlay">
    <div class="text-o"><p style={{fontSize:'4vw'}}>Login With Via Email Account For More Access.</p>
    <p>You should explore this page</p>
    
    <p>Please login</p>
<button onClick={signInUsingGoogle} className='btn btn-warning mb-5'>Google Sign in</button></div>
  </div>
</div>
        <div className='text-center mt-5'>

        <div className='p-4  ' >
    <div><p className='text-center bg-warning p-5' style={{fontSize:'2vw',borderRadius:'3vw'}}>Create your free account now and immediately get access to <br></br>100s of online courses.</p>
    </div>
 <div className='bg-light p-5' style={{borderRadius:'3vw'}}>
 <form >
  <p className='text-warning text-start' style={{fontSize:'2vw'}}>Register Now!</p>
 <div className="mb-3 text-start">
      
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby=" " placeholder='Your first name'/>
      
    </div>
    <div className="mb-3 text-start">
      
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby=" " placeholder='Your last name'/>
      
    </div>
 <div className="mb-3 text-start">
      
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3 text-start">
     
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Write password'/>
    </div>
    <div className="mb-3 text-start">
     
     <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Re-write password'/>
   </div>
    <div className="mb-3 form-check text-start">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label text-dark" for="exampleCheck1">Check me out</label>
    </div>
    <div className='text-start'><button type="submit" className="btn btn-warning">Sign In</button></div>
  </form>
 </div>
   </div>         

</div>
  </>
    );
};

export default Login;