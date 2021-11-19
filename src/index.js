import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "./Style/Main.css";
import "./Style/rbc-colors.css";
import "./Style/mediaQueries.css";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
