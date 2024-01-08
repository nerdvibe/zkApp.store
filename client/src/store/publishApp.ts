import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PublishAppSlice {
  title: string;
  body: string;
  subtitle: string;
  slug: string;
  category: string;
  version: string;
  link: string;
  key: string;
}

// Define the initial state using that type
const initialState: PublishAppSlice = {
  title: "",
  body: "",
  subtitle: "",
  slug: "",
  category: "",
  version: "",
  key: "",
  link: "",
};

export const publishAppSlice = createSlice({
  name: "publishApp",
  initialState,
  reducers: {
    updateAppDetails: (state, { payload }) => {
      state[payload.field as keyof PublishAppSlice] = payload.value;
    },
  },
});

export const { updateAppDetails } = publishAppSlice.actions;

export default publishAppSlice.reducer;
