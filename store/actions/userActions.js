import userReducer from "../reducers/userReducer";
import actiontypes from "../actionTypes";
import { useSelector } from "react-redux";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const res = await fetch("https://v5.cashflow.do/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        domain: "Pruebaniurkysmichelle",
        username: email,
        password: password,
        
      }),
    });

    const result = await res.json();
    dispatch({ type: "SET_LOADING", payload: false });

    if (result.token) {
      dispatch({
        type: "LOGIN",
        payload: result,
      });
    } else {
      dispatch(console.log('error från login'+result.error));
    }
  };
};

export const logOutUser = (input) => {
  return async (dispatch) => {
    dispatch({ type: "LOG_OUT_USER", payload: null });
  };
};



