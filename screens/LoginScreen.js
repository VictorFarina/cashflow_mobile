import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import useScreenSizes from "../hooks/use-screen-sizes";
//components--------------------------------
import InputComponent from "../components/ui/InputComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import TextComponent from "../components/ui/TextComponent";
import LogoComponent from "../components/ui/LogoComponent";
import LinkComponent from "../components/ui/LinkComponent";
import LoadingComponent from "../components/ui/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/userActions";

//Custom hooks
import useInput from "../hooks/use-input";
import Colors from "../constants/Colors";
import logo from "../assets/images/logo.png";

const LoginScreen = ({ navigation }) => {
 
  const dispatch = useDispatch();
  const display = useScreenSizes();
  const emailValidation = (email) => {
    return email.trim().length > 6 && email.trim().includes("@");
  };
  const email = ({
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
    validationMessages,
  } = useInput("Email", "min:5", emailValidation));

  const password = ({
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
    validationMessages,
  } = useInput("Password", "required"));

  const pressHandler = () => {
    dispatch(loginUser(email.value, password.value));
  };

  return (
    
    <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent
            width={display.small ? 50 : 70}
            height={display.small ? 50 : 70}
            logo={logo}
          />
        </View>

        <View
          style={{
            ...styles.titleContainer,
          }}>
          <TextComponent
            textAlign={"left"}
            color={Colors.black}
            title='Welcome'
            fontWeight={"300"}
            fontSize={display.small ? 25 : 35}
          />
          <TextComponent
            textAlign={"left"}
            color={Colors.gray}
            title='Sign In to Continue'
            fontWeight={"300"}
            fontSize={display.small ? 12 : 16}
          />
        </View>

        <InputComponent
          type='e-mail'
          icon='md-mail'
          iconSize={display.small ? 20 : 30}
          iconColor={Colors.inputIconColor}
          placeholder={"Email"}
          onChangeText={email.changeHandler}
          onBlur={email.blurHandler}
          value={email.value}
          error={email.hasError}
          errorMessage='The email is invalid'
          marginTop={80}
          borderColor={"transparent"}
        />

        <InputComponent
          type='password'
          icon='lock-closed' 
          iconSize={display.small ? 20 : 30}
          iconColor={Colors.inputIconColor}
          placeholder={"Password"}
          onChangeText={password.changeHandler}
          backgroundColor={Colors.inputgray}
          onBlur={password.blurHandler}
          autoCapitalize='none'
          autoCorrect={false}
          value={password.value}
          error={password.hasError}
          errorMessage="The field can't be empty"
          borderColor={"transparent"}
        />

        <View style={{ width: "100%" }}>
          <LinkComponent
            title='Forgot Password?'
            to='ForgotPassword'
            textAlign={"right"}
          />
        </View>

        <View style={styles.btnContainer}>
          <ButtonComponent
            marginTop={40}
            width={"100%"}
            backgroundColor={Colors.buttonBlue}
            title={'Sign In'}
            fontSize={display.small ? 16 : 20}
            color='#fff'
            type='submit'
            onPress={pressHandler}
          />
        </View>

        <View
          style={{
            ...styles.signUpTextContainer,
            marginBottom: display.small ? 20 : 40,
          }}>
          <Text style={{ fontSize: display.small ? 10 : 14 }}>
            Don't you have and account?{"  "}
          </Text>
          <LinkComponent title='Sign Up?' to='SignUp' />
        </View>

        <View style={styles.footerTextContainer}>
          <Text
            style={{ ...styles.footerText, fontSize: display.small ? 10 : 14 }}>
            By tapping Sing In,you agree to our{" "}
            <LinkComponent title='Terms' to='' /> and have read and acknowledge
            our <LinkComponent title='Privacy Policy?' to='' />
          </Text>
        </View>
        
      </SafeAreaView>
    </Pressable>


  
  


  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "80%",
    width: "80%",
    alignItems: "center",
  },

  logoContainer: {
    width: "100%",
    marginBottom: 30,
  },

  titleContainer: {
    width: "100%",
  },

  btnContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },

  signUpTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerTextContainer: {
    alignSelf: "center",
    justifyContent: "center",
  },
  footerText: {
    textAlign: "center",
    color: Colors.gray,
  },
});
