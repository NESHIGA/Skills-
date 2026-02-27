import React from 'react';
import'./Login.css'
const Login=()=>{
    return(
        <>
        <center>
        <div className='Login-card'>
            
            <h1>Login Page</h1>
            <h2>Sign In with Email</h2>
           <p>Make a DataBase with json and document with this Login</p>
            <form>
                <div className='form-control'>
                <center>✉️<input type="Email" placeholder="Enter your Email"/></center><br></br>
                <center>🔒<input type="Password" placeholder="Enter your Password"/></center>
                <center><a href="#" className='forgot'>Forgot Password</a></center><br></br>
                <center><button>Login</button></center>
                </div>
            </form>
        </div>
        </center>
        </>
    )
}
export default Login;