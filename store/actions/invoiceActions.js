export const getUserInvoices = (token) => {

  return async (dispatch) => {
    const res = await fetch("https://v5.cashflow.do/api/v1/invoices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await res.json();
    dispatch({ type: "SET_LOADING", payload: false });

    if (result.data) {
      dispatch({
        type: "GET_USER_INVOICES",
        payload: result.data,
      });
    } else {
      dispatch(console.log('error från getUserInvoices' + result.error));
    }
  };
  
};

export const showInvoice = (invoiceId, token) => {
  

  return async (dispatch) => {
    const res = await fetch(
      `https://v5.cashflow.do/api/v1/invoices/${invoiceId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const result = await res.json();

    if (result.header) {
      dispatch({ type: "SHOW_INVOICE", payload: result });
    } else {
      dispatch(console.log("detta kommer från showInvoice" + result.error));
    }
  };
};