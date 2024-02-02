import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ProductItem {
  productItem: {
    name: string;
    description: string;
    ID: string;
    category: string;
    imageurl: string;
  };
}

const initialState: ProductItem = {
  productItem: {
    name: "",
    description: "",
    ID: "",
    category: "",
    imageurl: "",
  },
};

export const getProductItem = createAsyncThunk(
  "productItem/getProductItem",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:8000/product/${id}`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getProductItem.fulfilled, (state: any, action: any) => {
      state.productItem = action.payload;
    });
  },
});

export default singleProductSlice.reducer;
