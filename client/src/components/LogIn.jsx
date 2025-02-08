import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { IoIosClose } from "react-icons/io";
import {useDispatch, useSelector} from 'react-redux';
import { logIn, registerUser, userReset,logOut } from '../features/auth/authSlice';
import toast from 'react-hot-toast';
import { signUpUser } from '../features/auth/authService';

const Login = ({showLogin}) => {

  // for show login /signup form:
    const [currentState,setCurrentState] = useState("Login");

    // state for sing up :
    const [formFields,setFormFields] = useState({
      name:'',
      email:'',
      password:'',
      phone:'',
    });

    
    

    const {userError,userMessage} = useSelector((state)=>state.auth);
    useEffect (()=>{
      if(userError){
        toast.error(userMessage);  
      }
      
      dispatch(userReset());  

    },[userError]);

    

    
    
    // for making controlled input for login form:
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState('');

    // for  making controlled input for sign up form:
    const [name,setName] = useState ('');
    const [phone,setPhone] = useState('');

  //   useDispatch hook for run the slice function:
       const dispatch = useDispatch();

       const handleSignup = (e)=>{
        e.preventDefault();
        const frontendData = {
          name,
          email,
          password,
          phone,
        };
        dispatch(registerUser(frontendData));

       }

    const handleLogin = (e)=>{
          e.preventDefault();
    //  make data that going to be sent to backend:
    const frontendData = {
      email : email,
      password : password,
    };
   
    //  call the slice function:
    dispatch(logIn(frontendData))
  };
  const handleLogout = () => {
    dispatch(logOut()); // Dispatch logOut action
  };

  

  return (
    <>
    <div className="popup">
    <Form className='login-form'>
        <div className="login-title">  
       <h3>{currentState}</h3>
       <IoIosClose className='cross-icon fs-3'  onClick={()=>showLogin(false)} />
       </div>
   
    <div className="login-input d-flex flex-column gap-3 me-2">
        {currentState !=="Login" &&(
          <>
        <input value={name} onChange={(e)=>setName(e.target.value)}
 className='form-control' type="text" placeholder=' Name' required/>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)}
 className='form-control' type="text" placeholder=' Phone' required/>

        </>
        )}
        <input  
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        className="form-control "type="email" placeholder=' Email' required />
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="form-control"  type="password" placeholder=" Password" required />

    </div>
    
      
    <button onClick={currentState === "Sign up" ? handleSignup : handleLogin}
     className='btn d-block mx-auto 
    rounded-3 text-white fs-5'>{currentState ==="Sign up"?"create an account":"Login"}</button> 

   <div className="conditions ">   
   {currentState !== "Login" && (
  <>
    <input className='checkbox mt-2' type="checkbox" required />
    <p>By creating an account you agree to our Terms & Privacy Policy</p>
  </>
)}
  
    
    
   </div>
   {currentState === "Login"? <p>Create a new account <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
   :<p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p> }
  </Form>
  </div>
  

    </>
  )
}

export default Login