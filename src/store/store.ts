import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import sidebarReducer from "./sidebar";
import productReducer from "./product";
import sessionReducer from "./session";
import configReducer from "./config";
import publishAppReducer from "./publishApp";
import favoriteProductsReducer from "./favourites";
import registrationReducer from "./registration";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    sidebar: persistReducer(persistConfig, sidebarReducer),
    product: persistReducer(persistConfig, productReducer),
    session: persistReducer(persistConfig, sessionReducer),
    config: persistReducer(persistConfig, configReducer),
    favoriteProducts: persistReducer(persistConfig, favoriteProductsReducer),
    publishApp: publishAppReducer,
    registration: registrationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
