import { Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";


const DividerComponent = (props) => {

  return (
    <View
      style={{
        marginVertical:20,
        borderBottomWidth: props.width ?? 1.5,
        borderBottomColor: props.color ?? Colors.lightGray ,
        fontSize: 14,
      }}></View>
  );
};

export default DividerComponent;
