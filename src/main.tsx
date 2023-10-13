import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { apolloClient } from "./api/api.ts";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <BrowserRouter>
          <NextUIProvider>
            {/* <NextThemesProvider attribute="class" defaultTheme="purple-dark"> */}
            <App />
            {/* </NextThemesProvider> */}
          </NextUIProvider>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
