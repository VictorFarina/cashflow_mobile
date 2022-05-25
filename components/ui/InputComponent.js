import { StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ErrorMessageComponent from "./ErrorMessageComponent";
import Colors from "../../constants/Colors";
import useScreenSizes from "../../hooks/use-screen-sizes";


const InputComponent = (props) => {
  const display = useScreenSizes();
  const [secureText, setSecureText] = useState(props.type === "password");
  const [onFocused, setOnFocused] = useState(false);

  const iconPressHandler = () => {
    setSecureText((prevState) => !prevState);
  };
  return (
    <>
      <Pressable
        placeholder={props.placeholder}
        style={{
          position: "relative",
          backgroundColor: props.backgroundColor ?? Colors.inputgray,
          borderColor: props.error
            ? Colors.validationRed
            : onFocused
            ? Colors.gray
            : "transparent",
          borderWidth: 1,
          marginTop: props.marginTop,
          width: props.width ?? "100%",
          flexDirection: "row",
          height:
            props.height ?? display.small
              ? 50
              : display.medium
              ? 56
              : display.large
              ? 60
              : 70,
          marginVertical: display.small
            ? 10
            : display.medium
            ? 20
            : display.large
            ? 20
            : display.iPad && 40,
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "flex-start",
          marginTop: props.marginTop ?? null,
        }}>
        <Ionicons
          style={styles.icon}
          name={
            props.type === "e-mail"
              ? "mail-outline"
              : props.type === "password"
              ? "lock-closed"
              : props.type === "name"
              ? "person-outline"
              : props.type === "domain"
              ? "business-outline"
              : ""
          }
          size={props.height === 25 ? 20 : 30}
          color={props.iconColor ?? Colors.inputIconColor}></Ionicons>

        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          onFocus={() => setOnFocused(true)}
          onBlur={() => setOnFocused(false)}
          onEndEditing={props.onEndEditing}
          secureTextEntry={secureText}
          onChangeText={props.onChangeText}
          textAlign={"left"}
          value={props.value}
        />

        {props.type === "password" && (
          <Ionicons
            style={styles.icon}
            name={secureText ? "eye-off" : "eye"}
            size={props.height === 25 ? 20 : 30}
            color={props.iconColor ?? Colors.inputIconColor}
            onPress={iconPressHandler}></Ionicons>
        )}

        {props.error ? (
          <ErrorMessageComponent
            height={300}
            textAlign='left'
            message={props.error}
            width='100%'
            backgroundColor='red'
          />
        ) : null}
      </Pressable>
    </>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  headerTitle: {
    top: "-90%",
    textAlign: "left",
    fontWeight: "bold",
    position: "absolute",
  },

  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginHorizontal: 15,
    height: "50%",
  },

  input: {
    flexDirection: "row",
    alignContent: "center",
    flex: 1,
    height: "100%",
    fontSize: 14,
    marginTop: "1%",
  },
});
