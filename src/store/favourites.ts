import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the favorite products slice state
interface FavoriteProductsState {
  products: string[]; // You can use an array of product IDs or an object depending on your needs
  isProductFavorite: Record<string, boolean>; // A dictionary to store whether each product is a favorite
}

// Define the initial state using that type
const initialState: FavoriteProductsState = {
  products: [],
  isProductFavorite: {},
};

export const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      // Add the product to the favorites list if it's not already there
      if (!state.products.includes(action.payload)) {
        state.products.push(action.payload);
      }
      // Mark the product as a favorite
      state.isProductFavorite[action.payload] = true;
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      // Remove the product from the favorites list if it exists
      state.products = state.products.filter(
        (productId) => productId !== action.payload
      );
      // Mark the product as not a favorite
      state.isProductFavorite[action.payload] = false;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      // Toggle whether the product is a favorite or not
      const productId = action.payload;
      if (state.isProductFavorite[productId]) {
        // If it's currently a favorite, remove it
        state.products = state.products.filter(
          (productId) => productId !== action.payload
        );
        state.isProductFavorite[productId] = false;
      } else {
        // If it's not a favorite, add it
        state.products.push(productId);
        state.isProductFavorite[productId] = true;
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoriteProductsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFavoriteProducts = (state: RootState) =>
  state.favoriteProducts.products;

export const selectIsProductFavorite =
  (productId: string) => (state: RootState) =>
    state.favoriteProducts.isProductFavorite[productId];

export default favoriteProductsSlice.reducer;
