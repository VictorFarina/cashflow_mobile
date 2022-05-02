import { Text, View, TouchableOpacity, StyleSheet, Link } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const DropdownMenuComponent = (props) => {
  pressHandler = () => {
    props.navigation.navigate("MenuScreen");
  };

  return (
    <TouchableOpacity style={styles.dropdownIcon}>
      <Ionicons
        name={"menu-outline"}
        size={40}
        color={Colors.cashFlowBlue}
        navigation={props.navigation}
        onPress={pressHandler}></Ionicons>
    </TouchableOpacity>
  );
};

export default DropdownMenuComponent;

const styles = StyleSheet.create({
  dropdownIcon: {
    marginRight: 20,
  },
});
