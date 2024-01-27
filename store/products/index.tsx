import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsProp {
  name: string;
  description: string;
  ID: string;
  category: string;
  imageurl: string;
}

interface ProductsState {
  products: ProductsProp[];
}

const initialState: ProductsState = {
  products: [],
};

export const AllProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<ProductsProp[]>) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProducts } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;
