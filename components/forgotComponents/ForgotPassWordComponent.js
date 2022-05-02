import { Text, View } from "react-native";
import InputComponent from "../ui/InputComponent";
import TextComponent from "../ui/TextComponent";
import ButtonComponent from "../ui/ButtonComponent";
import React from "react";
import useScreenSizes from "../../hooks/use-screen-sizes";
import Colors from "../../constants/Colors";

const ForgotPasswordComponent = (props) => {
  const display = useScreenSizes();

  return (
    <>
      <TextComponent
        color={Colors.black}
        title={props.title}
        fontWeight={"500"}
        fontSize={20}
        marginVertical={20}
        marginTop={50}
      />
      <TextComponent
        color={Colors.black}
        title={props.text}
        fontWeight={"300"}
        fontSize={16}
        marginVertical={10}
             marginTop={20}
      />
      <InputComponent
        icon={props.iconInput}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        errorMessage={props.inputErrorMessage}
        borderColor={props.inputError ? Colors.validationRed : "transparent"}
        onBlur={props.inputOnBlur}
        onChangeText={props.inputChangeEmailHandler}
        error={props.inputHasError}
        marginTop={40}
      />

      {props.verifiedUser && (
        <InputComponent
          icon={props.iconInput}
          type={props.inputType}
          placeholder={props.inputPlaceholder2}
          errorMessage={props.inputErrorMessage}
          borderColor={props.inputError ? Colors.validationRed : "transparent"}
          onBlur={props.inputOnBlur}
          onChangeText={props.inputChangeEmailHandler}
          error={props.inputHasError}
        />
      )}

      <ButtonComponent
        backgroundColor={Colors.buttonBlue}
        title='Continue'
        color='#fff'
        type='submit'
        onPress={props.handler}
        marginTop={50}
      />
    </>
  );
};

export default ForgotPasswordComponent;
