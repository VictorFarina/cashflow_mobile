import { Text } from "react-native";
import { useWindowDimensions } from "react-native";
import Colors from "../../constants/Colors";

const TextComponent = (props) => {
  const window = useWindowDimensions();

  return (
    <Text
      style={{
        backgroundColor:props.backgroundColor,
        position:props.position ?? null,
        top:props.top,
        width:props.width ?? null,
        textAlign:props.textAlign ?? 'center',
        fontWeight: props.fontWeight ?? 'normal',
        fontSize: window.height < 700 ? 20 : props.fontSize ,
        color: Colors[props.color],
        fontSize: props.fontSize,
        padding:props.padding ?? 0,
        margin:props.margin ?? 0,
        marginVertical: props.marginVertical ?? 0,
        marginHorizontal: props.marginHorizontal ?? 0,
        marginBottom: props.marginBottom ?? 0,
        marginTop:props.marginTop ?? 0,
        marginLeft:props.marginLeft ?? 0
      }}>
      {props.title  ?? ''}
    </Text>
  );
};

export default TextComponent;
