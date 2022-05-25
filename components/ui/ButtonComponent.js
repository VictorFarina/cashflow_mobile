import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useScreenSizes from "../../hooks/use-screen-sizes";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonComponent = (props) => {

  const display = useScreenSizes();
  return (

    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor:
          props.form === "circle"
            ? '#fff'
            : props.backgroundColor ?? Colors.buttonBlue,
        width: props.form === "circle" ? 50 : props.width ?? "100%",
        height: props.form === "circle" ? 50 : props.height ??  75,
        marginTop: props.marginTop ?? 10,
        padding:
          props.padding ?? display.small
            ? 20
            : display.medium
            ? 20
            : display.large
            ? 25
            : 30,
        borderRadius: props.form === "circle" ? 50 : 5,
      }}
      onPress={props.onPress}>

      {props.form === "circle" ? (
        <Ionicons
          color='blue'
          name={props.form === "circle" ? "add-circle" : null}
          size={props.height === 25 ? 20 : 30}></Ionicons>
      ) : (null)}
     

      <Text
        style={{
          fontSize: props.fontSize ?? 20,
          fontWeight: props.fontWeight,
          color: props.textColor ?? "#fff",
        }}>
        {props.title}
      </Text>

    </TouchableOpacity>
  );


};

export default ButtonComponent;
