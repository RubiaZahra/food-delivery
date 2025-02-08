import axios from 'axios';


// for LoginUser:
export const loginUser = async(frontendData)=>{
 const response = await axios.post ('http://localhost:3001/api/user/login-user',frontendData);

// for store that response:

if(response.data){
    localStorage.setItem('User',JSON.stringify(response.data))
}
  return response.data;
};

// for SignUp:

export const signUpUser = async(frontendData)=>{
   const response = await axios.post ('http://localhost:3001/api/user/register-user',frontendData);
   if(response.data){
    localStorage.setItem('User',JSON.stringify(response.data))
   }
   return response.data;
}