import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import TextComponent from "../components/ui/TextComponent";
import DividerComponent from "../components/ui/DividerComponent";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/actions/userActions";

const MenuScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.menu}>
      
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("HomeScreen")}>
                  <Ionicons name='home-outline' color='white' size={30}></Ionicons>
          <TextComponent
            color='white'
            title='Home'
            fontSize={26}
            textAlign={"left"}
            marginLeft={20}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("InvoicesScreen")}>
          <Ionicons name='wallet-outline' color='white' size={30}></Ionicons>
          <TextComponent color='white' title='Invoices' fontSize={26} marginLeft={20}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => dispatch(logOutUser('hej'))}>
          <Ionicons name='log-out-outline' color='white' size={30}></Ionicons>
          <TextComponent color='white' title='Log out' fontSize={26} marginLeft={20}/>
        </TouchableOpacity>


 
      </View>

      <View />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.cashFlowBlue,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "80%",
    width: "80%",
    alignItems: "flex-start",
  },

  menu: {
    marginLeft: 30,
  },
});
