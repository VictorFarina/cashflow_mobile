import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextComponent from "../ui/TextComponent";

const RowComponent = (props) => {
  console.log(props);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: props.marginTop ?? 0,
        
      }}>
      <TextComponent
        fontSize={props.fontSize ?? 12}
        fontWeight={props.fontWeightLeft ?? "normal"}
        title={props.titleLeft ?? ""}
      />
      <TextComponent
        fontSize={props.fontSize ?? 12}
        fontWeight={props.fontWeightRight}
        title={props.titleRight}
      />
    </View>
  );
};

export default RowComponent;
