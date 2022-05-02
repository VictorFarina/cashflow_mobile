import { Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import useScreenSizes from "../../hooks/use-screen-sizes";

const LinkComponent = (props) => {
 
  const display = useScreenSizes();


  return (
    <Link
      style={{
        color: Colors.linkBLue,
        textAlign: props.textAlign,
        fontSize: props.fontSize 
      }}
      to={{ screen: props.to }}>
      {props.title}
    </Link>
  );
};

export default LinkComponent;
