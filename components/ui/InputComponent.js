import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ErrorMessageComponent from "./ErrorMessageComponent";
import Colors from "../../constants/Colors";
import useScreenSizes from "../../hooks/use-screen-sizes";

const InputComponent = (props) => {
  const display = useScreenSizes();
  const [secureText, setSecureText] = useState(props.type === "password");
  const iconPressHandler = () => {
    setSecureText((prevState) => !prevState);
  };

  return (
   
      <Pressable
        style={{
          backgroundColor: props.backgroundColor ?? Colors.inputgray,
          borderColor: props.error ? Colors.validationRed : "transparent",
          position: "relative",
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
          padding: 10,
          borderRadius: 10,
          alignContent: "center",
          marginTop: props.marginTop,
        }}>
         {props.headerTitle && (
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
      )}
        <View style={styles.icon}>
          <Ionicons
            name={
              props.type === "e-mail"
                ? "md-mail"
                : props.type === "password"
                ? "lock-closed"
                : props.type==="name" 
                ? "person-outline"
                : props.type==="domain" 
                ? "business-outline"
                : ""
            }
            size={
              props.height === 25 ? 20 : 30
            }
            color={props.iconColor ?? Colors.inputIconColor}>
            {" "}
          </Ionicons>
        </View>

        <View style={styles.input}>
      
  

          <TextInput
            onBlur={props.onBlur}
            style={{...styles.textInputStyle,
              width: props.type === "password" ? "73%" : "100%",
              height: "100%",
            }}
             
         
            textAlignVertical ="end"
            secureTextEntry={secureText}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            textAlign={"left"}
            justifyContent
            value={props.value}
           
          />

        
          {props.error && (
            <ErrorMessageComponent message={props.errorMessage} />
          )}

          {props.type === "password" && (
            <Ionicons
              style={{
                marginTop: 4,
                position: "absolute",
                right: "20%",
              }}
              name={secureText ? "eye-off" : "eye"}
              size={
                 props.height === 25 ? 20 : 30
              }
              color={props.iconColor ?? Colors.inputIconColor}
              onPress={iconPressHandler}></Ionicons>
          )}
          
        </View>
      </Pressable>
   
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  headerTitle: {
    top:'-90%',
    textAlign: "left",
     fontWeight: "bold",
    position: "absolute",

  },
  icon: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 2,
    marginTop: 5,
  },

  input: {
    textAlignVertical:'bottom',
    zIndex: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    position: "relative",
  },

  textInputStyle:{
    textAlignVertical : "bottom",
    marginTop:4,


  }
});
