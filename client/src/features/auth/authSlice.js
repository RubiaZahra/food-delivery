// import 2 things:
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { loginUser, signUpUser} from './authService';

// check the user in local storage:
const userExist = JSON.parse(localStorage.getItem('User'));

// user initial state:
const initialState = {
    user: userExist ? userExist:null,
    userLoading : false,
    userError : false,
    userSuccess : false,
    userMessage : false,
};


// make function to handle the state:
 export const logIn =  createAsyncThunk ("sign-in",async(frontendData,thunkAPI)=>{

    try {
        return await loginUser (frontendData)
        
     } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.error);        
     }
 });
 
 export const registerUser = createAsyncThunk ('sign-up',async(frontendData,thunkAPI)=>{
   try {
      return await signUpUser (frontendData)
      
   } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
   }
 });



// make state global:
export const authSlice = createSlice({
     name : 'auth', 
     initialState,
     reducers:{
      logIn: (state, action) => {
         state.user = action.payload; // Update user on login
       },
       logOut: (state) => {
         state.user = null; // Clear user data on logout
       },
      userReset:(state)=>{
        state.userLoading = false;
        state.userError = false;
        state.userSuccess = false;
         state.userMessage ="";
         state.userSuccessMessage = "";

      },
      
   },
        
  
     extraReducers:(builder)=>{
        builder
        .addCase(logIn.pending,(state,action)=>{
             state.userLoading=true;
        })
        .addCase (logIn.rejected, (state,action)=>{
          state.userLoading = false;
          state.userError = true;
          state.userMessage = action.payload;
          state.user = null;
        })
        .addCase (logIn.fulfilled,(state,action)=>{
           state.userLoading = false ;
           state.userSuccess = true;
           state.user = action.payload;
        })
         
        .addCase(registerUser.pending,(state,action)=>{
           state.userLoading = true;
        })
        .addCase(registerUser.rejected,(state,action)=>{
           state.userLoading = false;
           state.userError = true;
           state.userMessage = action.payload;
           state.user= null;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
               state.userLoading = false;
               state.userSuccess = true;
               state.user= action.payload;
               state.userSuccessMessage = "welcome";
        })

     }
});



// exort the reducer:

export const {userReset,logOut} = authSlice.actions;

// export the slice to store:
export default authSlice.reducer;