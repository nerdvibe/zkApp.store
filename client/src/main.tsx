import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./store/store.js";
import { Provider } from "react-redux";
import { apolloClient } from "./api/api.js";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <NextThemesProvider
      attribute="class"
      themes={["purple-dark", "light"]}
      defaultTheme="purple-dark"
    >
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </NextThemesProvider>
  </NextUIProvider>
  // </React.StrictMode>
);
