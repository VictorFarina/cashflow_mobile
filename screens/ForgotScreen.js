import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  Keyboard,
  Text,
} from "react-native";
import { useState } from "react";
import LogoComponent from "../components/ui/LogoComponent";
import logo from "../assets/images/cashflow-logo-text.png";
import ForgotPassWordComponent from "../components/forgotComponents/ForgotPassWordComponent";
import useInput from "../hooks/use-input";
import useScreenSizes from "../hooks/use-screen-sizes";


const ForgotScreen = (props) => {
  const display = useScreenSizes();
  const emailValidation = (email) => {
    return email.trim().length > 6 && email.trim().inclaudes("@");
  };
  const [emailSent, setEmailSent] = useState(false);
  const email = ({
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
    validationMessages,
  } = useInput("Email", "", emailValidation));

  const [verifiedUser, setVerifiedUser] = useState(false);

  const emailSentHandler = () => {
    //request
    // recieve digits
    setEmailSent(true);
  };

  const validNumberHandler = () => {
    //validation
    //request
    setVerifiedUser(true);
  };

  let screen = (
    <ForgotPassWordComponent
      title='¿Olvidaste tu contraseña?'
      text='No te preocupes, comienza el proceso de recuperación llenando este campo.'
      inputType={"e-mail"}
      inputPlaceholder={"Email"}
      inputErrorMessage='The email is invalid'
      inputOnOlur={props.onBlur}
      inputonChangeText={props.changeEmailHandler}
      inputError={props.hasError}
      handler={emailSentHandler}
      changeEmailHandler={email.changeHandler}
      inputValue={email.value}
      hasError={email.hasError}
    />
  );

  if (emailSent) {
    screen = (
      <ForgotPassWordComponent
        title='Verificar cuenta'
        text='Por favor escribe los 4 números que hemos enviado a su correo'
        inputErrorMessage='The email is invalid'
        inputOnBlur={props.onBlur}
        inputonChangeText={props.changeEmailHandler}
        inputError={props.hasError}
        emailSent={emailSentHandler}
        changeEmailHandler={email.changeHandler}
        inputValue={email.value}
        hasError={email.hasError}
        handler={validNumberHandler}
      />
    );
  }

  if (verifiedUser) {
    screen = (
      <ForgotPassWordComponent
        verifiedUser={verifiedUser}
        title='Nueva contraseña'
        inputPlaceholder='Contraseña'
        inputPlaceholder2='Repetir contraseña'
        inputType='password'
      />
    );
  }

  return (
    <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <LogoComponent width={236} height={40} logo={logo} marginTop={30} />
        {screen}
      </SafeAreaView>
    </Pressable>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },

  container: {
    height:'80%' ,
    width: "80%",
    alignItems: "center",
  },
});
