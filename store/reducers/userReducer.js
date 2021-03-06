
const initialState = {
  
     userToken:null,
     userData:{},
     invoice:{},
     loading:false

};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case "LOGIN":
      return {
        ...state,//copy all previuos states
        userToken:action.payload.token,
    }
    case "LOG_OUT_USER":
      return {
       //copy all previuos states
        userToken:action.payload
    }

    case "SET_LOADING" : 
    return{
      ...state,
       loading: action.payload
    }

    default:
      return state;
  }

};



export default userReducer;
