import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Component } from "react";
import TextComponent from "../ui/TextComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

const MenuItemComponent = (props) => {

  const pressHandler = () => {
      props.navigation.navigate("InvoicesScreen")
  };

  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={pressHandler}>
      <View style={styles.cardBody}>
        <Ionicons
          name='document-text-outline'
          size={40}
          color='#8ABBFF'></Ionicons>

        <Ionicons
          style={styles.addIcon}
          name='add-outline'
          size={40}
          backgroundColor='green'
          color='#8ABBFF'></Ionicons>
      </View>
      <TextComponent
        title={props.title}
        color='darkgray'
        padding={10}
        fontSize={15}
      />
    </TouchableOpacity>
  );
};

export default MenuItemComponent;

const styles = StyleSheet.create({
  menuItem: {
    height: 120,
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  cardBody: {
    position: "relative",
    width: "60%",
    height: "60%",
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 20,
    backgroundColor: "#F7FBFF",
    justifyContent: "center",
    alignItems: "center",
  },

  addIcon: {
    position: "absolute",
    top: "-20%",
    right: "-10%",
  },
});
