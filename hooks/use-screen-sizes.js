import { useWindowDimensions } from "react-native";
import { Platform } from "react-native";

export default useScreenSizes = () => {
  
  return {
    small:  useWindowDimensions().height  < 700,
    medium: useWindowDimensions().height  < 800,
    large:  useWindowDimensions().height  < 900,
    iPad: Platform.OS.isPad
  };
};
