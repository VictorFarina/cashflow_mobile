import { Text, View ,StyleSheet} from "react-native";
import React from "react";
import TextComponent from "./TextComponent";
import Colors from "../../constants/Colors";

const StatusComponent = (props) => {
  return (
    <View style={styles.statusComponent}>
      <View
        style={{
          height: 10,
          width: 10,
          marginRight:5,
          borderRadius: 50,
          backgroundColor:
            props.status==='Cerrada'   ? Colors.statusClosed   :
            props.status==='Abierta'   ? Colors.statusOpen     :
            props.status==='Parcial'   ? Colors.statusPartial  :
            props.status==='Borrador'  ? Colors.statusPartial  :
            props.status==='Anulada' ?? Colors.statusCanceled 
        }}></View>
      <TextComponent fontSize={10} color='gray' title={props.status ? props.status : ""} />
    </View>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({
  statusComponent:{
    flexDirection:'row',
    alignItems:'center'
  }
})



