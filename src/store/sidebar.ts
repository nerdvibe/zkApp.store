import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface SidebarState {
  active: boolean;
  collapsed: boolean;
  broken: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  active: true,
  collapsed: false,
  broken: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
      state.collapsed = !state.active;
    },
    collapse: (state) => {
      state.collapsed = !state.collapsed;
    },
    toggleBroken: (state) => {
      state.broken = !state.broken;
    },
  },
});

export const { toggle, collapse, toggleBroken } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sidebar.active;

export default sidebarSlice.reducer;
