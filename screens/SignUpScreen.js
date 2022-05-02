import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import TextComponent from "../components/ui/TextComponent";
import InputComponent from "../components/ui/InputComponent";
import logo from "../assets/images/cashflow-logo-text.png";
import LogoComponent from "../components/ui/LogoComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import CheckboxComponent from "../components/ui/CheckboxComponent";
import LinkComponent from "../components/ui/LinkComponent";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TextComponent title='Registro' fontSize={20} fontWeight={'bold'} marginBottom={30} />
        <InputComponent type={'name'} placeholder='Nombre' height={25}/>
        <InputComponent type={'name'} placeholder='Apellido' height={25}  />
        <InputComponent type={'e-mail'} placeholder='Correo' height={25} />
        <InputComponent type={'password'} placeholder='Contraseña' height={25} />
        <View style={styles.domainInputContainer}>
          <InputComponent type={'domain'} placeholder='Dominio'  width={"68%"} height={25} />
          <TextComponent title='@cashflow.do' textAlign='right' />
        </View>
        <View style={styles.termsContainer}>
          <CheckboxComponent />
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

        <ButtonComponent title='Crear Cuenta' padding={10} marginTop={'10%'} fontWeight={'bold'}/>
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
