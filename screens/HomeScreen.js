import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import MenuItemComponent from "../components/ui/MenuItemComponent";


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <MenuItemComponent title='Invoices' navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "80%",
    width: "80%",
    alignItems: "flex-start",
  },
});
