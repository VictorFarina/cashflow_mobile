const initialState = {
  allInvoices: {},
  invoice: {},
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_INVOICES":
      return {
        ...state,
        allInvoices: action.payload,
      };

    case "SHOW_INVOICE":
      return {
        ...state,
        invoice: action.payload,
      };

    default:
      return state;
  }
};

export default invoiceReducer;
