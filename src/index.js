import React from "react";
import ReactDOM from "react-dom";

// Needed to allow all react-redux on the whole website
import { Provider } from "react-redux";

import { App } from "./app/App.js";
import store from "./app/store.js";

ReactDOM.render(
  // Passing the store to Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
