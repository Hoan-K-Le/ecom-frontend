import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  ID: string;
  imageurl: string;
}

interface UserDataProp {
  userData: User;
}

const initialState: UserDataProp = {
  userData: {
    name: "",
    email: "",
    ID: "",
    imageurl: "",
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userDataSlice.actions;
export default userDataSlice.reducer;
