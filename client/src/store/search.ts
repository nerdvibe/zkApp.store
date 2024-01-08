import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchSlice {
  text: string;
  showModal: boolean;
}

// Define the initial state using that type
const initialState: SearchSlice = {
  text: "",
  showModal: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchApp: (state, { payload }) => {
      state.text = payload.value;
    },
    toggleModal: (state, { payload }) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { searchApp, toggleModal } = searchSlice.actions;

export default searchSlice.reducer;
