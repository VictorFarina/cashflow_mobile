import Navigator from "./navigation/Navigator";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import userReducer from "./store/reducers/userReducer";
import invoiceReducer from "./store/reducers/invoiceReducer";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({ userReducer ,invoiceReducer});
const store = configureStore({ reducer }, applyMiddleware(thunk));

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
