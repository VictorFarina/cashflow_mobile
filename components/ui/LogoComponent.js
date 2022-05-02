import { Image , View} from "react-native";

const LogoComponent = (props) => {
  return (

      <Image
      style={{
        marginTop: props.marginTop ?? 0,
        marginBottom: props.marginBottom,
        width: props.width,
        height: props.height,
      }}
      source={props.logo ?? '...'}
    />

  
  );
};

export default LogoComponent;
