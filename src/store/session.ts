import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface IUser {
  username: string;
  email: string;
  avatar?: string;
  error?: any;
  success: boolean;
}

// Define a type for the slice state
interface SessionState {
  error: null;
  success: false; // for monitoring the registration process.
  authToken: string | null;
  logged: boolean;
  user: IUser | null;
}

// Define the initial state using that type
const initialState: SessionState = {
  authToken: null,
  logged: false,
  user: null,
  error: null,
  success: false,
};

export const sessionSlice = createSlice({
  name: "session",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.logged = true;
      state.authToken = payload.token;
      state.user = payload.user;
    },
    logout: (state) => {
      state.logged = false;
      state.authToken = null;
      state.user = null;
    },
  },
});

export const { login, logout } = sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isLogged = (state: RootState) =>
  state.session.logged && state.session.authToken
    ? state.session.authToken
    : false;

export default sessionSlice.reducer;
