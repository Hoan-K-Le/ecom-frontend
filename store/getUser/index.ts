import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../userData";

export const logIn = createAsyncThunk(
  "login/getLogin",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8000/login",
        data: { email, password },
        withCredentials: true,
      });
      console.log(data);
      thunkAPI.dispatch(setUser(data.foundUser));
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// interface
interface UserProp {
  user: {
    name: string;
    email: string;
    imageurl: string;
    ID: string;
  };
}
// initialState
const initialState: UserProp = {
  user: {
    name: "",
    email: "",
    ID: "",
    imageurl: "",
  },
};
// createSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
// export reducer
export default userSlice.reducer;
