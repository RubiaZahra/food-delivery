import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../features/adminSlice'
export const store = configureStore({
  reducer: {
    food : foodReducer,
  },
});
