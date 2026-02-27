import React from 'react';
import'./Signin.css'
const Signin=()=>{
    return(
        <>
        <center>
        <div className='Login-card'>
            
            <h1>Welcome to the website</h1>
            <p> Sign in to access your dashboard and continue optimizing your QA process and get 30 day Free trail</p>
            <h2>Create Account</h2>
            <h3>USER LOGIN</h3>
            <form>
                <div className='form-control'>
                <center>🙍‍♀️<input type="Username" placeholder="Username"/></center><br></br>
                <center>🔒<input type="Password" placeholder="Password"/></center>
               <center> <a href="#" className='forgot'>Forgot Password</a></center>
                <center><button>Login</button></center>
                <center>or</center>
                <center>Don't have an account!!<a href="#" className='please'>Click here to SignUp</a></center>
          
                </div>
            </form>
        </div>
        </center>
        </>
    )
}
export default Signin;