import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addFood } from "./adminService";


// define your initial State

const initialState = {
    food: [],
    foodSuccess: false,
    foodError: false,
    foodLoading: false,
    foodMessage: "",
  };

  //call your service function

export const addFoodData = createAsyncThunk(
    "add-food",async (frontendData, thunkAPI) => {
      try {
        return await addFood(frontendData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error);
      }
    }
  );

// make your state global

export const adminSlice = createSlice({
    name: "addfood",
    initialState,
    reducers: {
      foodReset: (state) => {
        state.foodError = false;
        state.foodLoading = false;
        state.foodSuccess = false;
        state.foodMessage = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(addFoodData.pending, (state, action) => {
          state.foodLoading = true;
        })
        .addCase(addFoodData.rejected, (state, action) => {
          state.foodLoading = false;
          state.foodError = true;
          state.foodMessage = action.payload;
        })
        .addCase(addFoodData.fulfilled, (state, action) => {
          state.foodLoading = false;
          state.foodSuccess = true;
          state.food.push(action.payload);
        })
        
    },
  });
  
  export const { foodReset } = adminSlice.actions;
  export default adminSlice.reducer
