import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  rootReducer  from "./store/reducers/rootReducer";
import { composeWithDevTools }  from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
