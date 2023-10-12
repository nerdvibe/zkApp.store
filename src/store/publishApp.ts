import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PublishAppSlice {
  title: string;
  description: string;
  category: string;
  version: string;
  key: string;
}

// Define the initial state using that type
const initialState: PublishAppSlice = {
  title: "",
  description: "",
  category: "",
  version: "",
  key: "",
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
