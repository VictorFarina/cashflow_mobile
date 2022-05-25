const useInputValidation = (text, type) => {
  
  switch (type) {

    case "email": {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(String(text).toLowerCase())) {
        return "Invalid email";
      } else {
        return "isValid";
      }
    }

    case "password": {
      if (text.length < 8) {
        return "Your password must contain at least 8 characters!";
      } else {
        return "isValid";
      }
    }

    case "firstName" && "lastName": {
      const regex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

      if (!regex.test(String(text).toLowerCase())) {
        return "Please  write your real name";
      } else {
        return "isValid";
      }
    }

    default: {
      return;
    }
  }
};

export default useInputValidation;
