import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface SidebarState {
  active: boolean;
  collapsed: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  active: true,
  collapsed: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
    collapse: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggle, collapse } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebar.active;

export default sidebarSlice.reducer;
