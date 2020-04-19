import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  rootReducer  from "./store/reducers/rootReducer";
import { composeWithDevTools }  from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from "redux-thunk";
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
