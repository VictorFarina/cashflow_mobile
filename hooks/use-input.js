import { useState } from "react";
import Validations from "../constants/Validations";
import VALIDATION_MESSAGES from "../constants/ValidationMessages";

const VALIDATION_RULES = {
  required: Validations.VALID_REQUIRED,
  numeric: Validations.VALID_NUMERIC,
  min: Validations.VALID_MIN,
  max: Validations.VALID_MAX,
};

const useInput = (fieldName = "", rules = "", validate = null, defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [inputIsPressed, setInputIsPressed] = useState(false);

  let inputHasError = false,
    inputValueIsValid = false,
    validationMessages = [];

  const inputBlurHandler = () => {
    setInputIsPressed(true);
  };

  const inputValueChangeHandler = (value) => {
    setInputValue(value);
  };

  const reset = () => {
    setInputValue(defaultValue);
    setInputIsPressed(false);
  };

  if (rules !== "" && inputIsPressed && validate === null) {
    arg = "";
    rules = rules.split("|");
    result = true;

    for (let rule of rules) {
      if (rule.includes(":")) {
        argumentPosition = rule.indexOf(":");

        arg = rule.substring(argumentPosition + 1);
        rule = rule.substring(0, argumentPosition);

        result = VALIDATION_RULES[rule](arg, inputValue);
      } else {
        result = VALIDATION_RULES[rule](inputValue);
      }

      !result &&
        validationMessages.push({
          [rule]: VALIDATION_MESSAGES(fieldName, arg)[rule],
        });

      inputValueIsValid = validationMessages.length === 0;
      inputHasError = !inputValueIsValid;
    }
  }

  if (validate !== null) {
    inputValueIsValid = validate(inputValue);
    inputHasError = !validate(inputValue) && inputIsPressed;
  }

  return {
    value: inputValue,
    isValid: inputValueIsValid,
    hasError: inputHasError,
    changeHandler: inputValueChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
    validationMessages,
  };
  
};

export default useInput;

/*  if (validate !== null) {
    useEffect(() => {
      const timer = setTimeout(() => {
        inputHasError = !validate(inputValue) && inputIsTouched;
        inputValueIsValid = validate(inputValue);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }, [inputValue]);
  } */
