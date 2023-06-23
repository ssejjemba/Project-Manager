import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SidebarContextProvider } from "./contexts/sidebar-context.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
