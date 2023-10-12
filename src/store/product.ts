import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ProdutSlice {
  active: boolean;
  newProduct: boolean;
  productId?: string;
}

// Define the initial state using that type
const initialState: ProdutSlice = {
  active: true,
  newProduct: true,
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
  },
});

export const { toggleProductModal, toggleNewProductModal } =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebar.active;

export default productSlice.reducer;
