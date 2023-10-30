import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ZkApp {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  owner: string;
  body?: string;
  reviewScore?: number;
  reviewCount?: number;
  currentVersion: string;
  url: string;
  discordUrl?: string;
  githubUrl?: string;
  category?: string;
  icon?: string;
  bannerImage?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Define a type for the slice state
interface ProdutSlice {
  active: boolean;
  newProduct: boolean;
  editProduct: boolean;
  productId?: string;
  selectedApp?: ZkApp;
}

// Define the initial state using that type
const initialState: ProdutSlice = {
  active: false,
  newProduct: false,
  editProduct: false,
  productId: "",
  selectedApp: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateSelectedApp: (state, { payload }) => {
      state.selectedApp = payload.zkApp;
    },
    toggleProductModal: (state, { payload }) => {
      state.active = payload.active;
      state.productId = payload.productId;
    },
    toggleNewProductModal: (state, { payload }) => {
      state.newProduct = payload.active;
    },
    toggleEditProductModal: (state, { payload }) => {
      state.editProduct = payload.active;
    },
  },
});

export const {
  toggleProductModal,
  toggleNewProductModal,
  toggleEditProductModal,
  updateSelectedApp,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebar.active;

export default productSlice.reducer;
