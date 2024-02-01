import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import GetAllProductsReducer from "./products";
import getProductItemReducer from "./singleProduct";

export const store = configureStore({
  reducer: {
    products: GetAllProductsReducer,
    singleProduct: getProductItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
