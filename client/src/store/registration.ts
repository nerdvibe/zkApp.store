import { createSlice } from "@reduxjs/toolkit";

export interface ConfigState {
  showEmailVerification: boolean;
}

const initialState: ConfigState = {
  showEmailVerification: false,
};

export const configSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    disableEmailVerification: (state) => {
      state.showEmailVerification = false;
    },
    showEmailVerification: (state) => {
      state.showEmailVerification = true;
    },
  },
});

export const { disableEmailVerification, showEmailVerification } =
  configSlice.actions;

export default configSlice.reducer;
