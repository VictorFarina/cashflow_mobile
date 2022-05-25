import { StyleSheet, Text, View , Pressable} from "react-native";
import React from "react";
import DividerComponent from "../ui/DividerComponent";
import TextComponent from "../ui/TextComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import RowComponent from "./RowComponent";
import Colors from "../../constants/Colors";

const OpeningModalComponent = (props) => {
 
  const [clicked, setClicked] = React.useState(false);

  return (
    <Pressable style={styles.screen}  onPress={  () => setClicked(!clicked ? true : false)} >
 
      <View style={{ ...styles.modalHeader }}>
      
            <RowComponent
              fontSize={14}
              marginTop={10}
              titleLeft={props.headerTitle.titleLeft} 
              fontWeightLeft='bold'
              titleRight={props.headerTitle.titleRight}
            />


        {!clicked ? (
          <Ionicons
            size={25}
            name='chevron-down-outline'></Ionicons>
        ) : (
          <Ionicons
            size={25}
            name='chevron-up-outline'></Ionicons>
        )}
      </View>

      {clicked ? (
        <View style={styles.content}>
          {props.titles.map((title) => (
            <RowComponent
              fontSize={14}
              marginTop={10}
              titleLeft={title.titleLeft}
              fontWeightLeft='bold'
              titleRight={title.titleRight}
            />
          ))}
        </View>
      ) : null}

      <DividerComponent />


    </Pressable>
  );
};

export default OpeningModalComponent;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  content: {
    paddingHorizontal:8,
    backgroundColor:Colors.modalGray,
    width: "100%",
    borderTopWidth:0.2
  },
});
