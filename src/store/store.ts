import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import searchReducer from "./search";
import newsModalReducer from "./newsModal";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar", "session", "config", "favoriteProducts"],
  blacklist: ["product", "publishApp", "search", "registration"],
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  product: productReducer,
  session: sessionReducer,
  config: configReducer,
  favoriteProducts: favoriteProductsReducer,
  publishApp: publishAppReducer,
  search: searchReducer,
  registration: registrationReducer,
  newsModal: newsModalReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
