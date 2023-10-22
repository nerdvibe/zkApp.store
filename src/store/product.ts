import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ProdutSlice {
  active: boolean;
  newProduct: boolean;
  editProduct: boolean;
  productId?: string;
}

// Define the initial state using that type
const initialState: ProdutSlice = {
  active: false,
  newProduct: false,
  editProduct: false,
  productId: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
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
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebar.active;

export default productSlice.reducer;
