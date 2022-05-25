import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextComponent from "../ui/TextComponent";

const RowComponent = (props) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: props.marginTop ?? 0,
      }}>
      <TextComponent
        textAlign='left'
        fontSize={props.fontSize ?? 12}
        fontWeight={props.fontWeightLeft ?? "normal"}
        title={props.titleLeft + ":" + " "}
      />
      <TextComponent
        textAlign='right'
        width='60%'
        fontSize={props.fontSize ?? 12}
        fontWeight={props.fontWeightRight}
        title={props.titleRight}
      />
    </View>
  );
};

export default RowComponent;
