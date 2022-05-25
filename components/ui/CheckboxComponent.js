import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const CheckboxComponent = (props) => {
 
  const [checked, setChecked] = useState(false);

  const pressHandler = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Ionicons
      style={{
        ...styles.icon,
        backgroundColor: checked ? Colors.buttonBlue : "#fff",
        color: checked ? Colors.black : "transparent",
      }}
      name='md-checkmark'
      onPress={pressHandler}></Ionicons>
  );
};

export default CheckboxComponent;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
});
