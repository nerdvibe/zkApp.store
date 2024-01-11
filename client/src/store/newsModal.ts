import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NewsModalSlice {
  title: string;
  body: string;
  banner: string;
  ctaLink?: string;
  showModal: boolean;
}

// Define the initial state using that type
const initialState: NewsModalSlice = {
  title: "",
  body: "",
  banner: "",
  ctaLink: "",
  showModal: false,
};

export const newsModalSlice = createSlice({
  name: "newsModal",
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.title = payload.title;
      state.body = payload.body;
      state.banner = payload.banner;
      state.ctaLink = payload.ctaLink;
      state.showModal = true;
    },
    hideModal: (state) => {
      state.title = "";
      state.body = "";
      state.banner = "";
      state.ctaLink = "";
      state.showModal = false;
    },
  },
});

export const { showModal, hideModal } = newsModalSlice.actions;

export default newsModalSlice.reducer;
