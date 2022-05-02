import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import TextComponent from "../ui/TextComponent";
import StatusComponent from "../ui/StatusComponent";
import React from "react";
import { NavigationRouteContext } from "@react-navigation/native";

const ListCard = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("InvoiceDetailsScreen",{props:props.invoiceId});
  };

  return (


    <TouchableOpacity style={styles.listCard} onPress={pressHandler}>
      <View style={styles.cardHeader}>
       
        <TextComponent
          color='gray'
          textAlign={"left"}
          title={props.doc_number}
          fontSize={10}
        />
        <TextComponent
          color='gray'
          textAlign={"left"}
          title={props.date_issue}
          fontSize={10}
        />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.bodyImage}></View>
        <View style={styles.bodyText}>
          <TextComponent
            textAlign={"left"}
            color='darkgray'
            title={props.client}
            fontWeight={"bold"}
            fontSize={14}
          />
          <TextComponent
            textAlign={"left"}
            title={props.date_issue}
            fontSize={14}
            color='darkgray'
          />
          <TextComponent
            fontSize={14}
            color='darkgray'
            textAlign={"left"}
            title='Monto'
            fontWeight={"bold"}
            marginTop={20}
          />
          <TextComponent
            fontSize={14}
            textAlign={"left"}
            title={props.format_amount}
            color='darkgray'
          />
        </View>
      </View>

      <View style={styles.cardFooter}>
        <StatusComponent status={props.status} />
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  listCard: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    height: 220,
    padding: 20,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#6391D5",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardBody: {
    marginTop: 50,
    flexDirection: "row",
    height: "50%",
    width: "100%",
    justifyContent: "flex-start",
  },

  bodyImage: {
    width: 80,
    height: 80,
    backgroundColor: "#898989",
    borderRadius: 15,
  },

  bodyText: {
    height: "100%",
    width: "100%",
    marginLeft: 20,
    textAlign: "left",
  },

  cardFooter: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
