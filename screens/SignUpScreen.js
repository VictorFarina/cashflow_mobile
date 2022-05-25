import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TextComponent from "../components/ui/TextComponent";
import InputComponent from "../components/ui/InputComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import CheckboxComponent from "../components/ui/CheckboxComponent";
import LinkComponent from "../components/ui/LinkComponent";

import useInputValidation from "../hooks/useInputValidation";


const SignUpScreen = () => {
  const [user, setUser] = React.useState("");
  const [error, setError] = React.useState("");

  const changeHandler = (text, type) => {
    const validationResult = useInputValidation(text, type);
    if (validationResult != "isValid") {
      setError({ ...error, [type]: validationResult });
    } else {
      setError({ ...error, [type]: null }), setUser({ ...user, [type]: text });
    }
    console.log(error);
  };

  function pressHandler() {
    console.log(user);
  }

  return (
    
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TextComponent
          title='Registro'
          fontSize={20}
          fontWeight={"bold"}
          marginBottom={30}
        />

        <InputComponent
          onChangeText={(text) => changeHandler(text, "firstName")}
          error={error.firstName}
          type={"name"}
          placeholder='Nombre'
          height={25}
        />

        <InputComponent
          onChangeText={(text) => changeHandler(text, "lastName")}
          error={error.lastName}
          type={"name"}
          placeholder='Apellido'
          height={25}
        />

        <InputComponent
          onChangeText={(text) => changeHandler(text, "email")}
          error={error.email}
          type={"e-mail"}
          placeholder='Correo'
          height={25}
        />
        <InputComponent
          onChangeText={(text) => changeHandler(text, "password")}
          error={error.password}
          type={"password"}
          placeholder='Contraseña'
          height={25}
        />
        <View style={styles.domainInputContainer}>
          <InputComponent placeholder='Dominio' width={"68%"} height={25} />
          <TextComponent title='@cashflow.do' textAlign='right' />
        </View>
        <View style={styles.termsContainer}>
          <CheckboxComponent onCheck={() => setCheck(true)} />

          <View style={styles.termsTextContainer}>
            <Text>
              Acepto los{" "}
              <LinkComponent
                fontSize={14}
                title={"Términos de Uso & Política de Privacidad"}
              />
            </Text>
          </View>
        </View>

        <ButtonComponent
          onPress={pressHandler}
          title='Crear Cuenta'
          padding={10}
          marginTop={"10%"}
          fontWeight={"bold"}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "90%",
    width: "80%",
    alignItems: "center",
  },

  domainInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  termsContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },

  termsTextContainer: {
    marginLeft: 20,
    flexDirection: "row",
  },
});
