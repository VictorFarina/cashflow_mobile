import { Text ,Animated} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const ErrorMessageComponent = (props) => {

const translation=React.useRef(
  new Animated.Value(-10)
).current;


React.useEffect(() => {
 
Animated.timing(translation,{
  toValue:20,
}).start()
},[]);

  return (
    <Animated.Text
      style={{
        transform:[{translateX:translation}],
        color: Colors.validationRed,
        position: "absolute",
        fontSize:12,
        top: "110%",
        left: "1%",
      }}>
      {props.message}
    </Animated.Text>
  );
};

export default ErrorMessageComponent;
