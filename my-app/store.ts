import { apiAuthSlice } from "@/Components/lib/api_slices/auth";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiAuthSlice.middleware), // thunk đã được tích hợp sẵn
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook để dùng dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
