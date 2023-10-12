import { createSlice } from "@reduxjs/toolkit";

export interface ConfigState {
  globalLoading?: boolean;
}

const initialState: ConfigState = {
  globalLoading: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleLoader: (state, { payload }) => {
      state.globalLoading = payload.show;
    },
  },
});

export const { toggleLoader } = configSlice.actions;

export default configSlice.reducer;
