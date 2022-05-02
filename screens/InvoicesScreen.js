import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";

import ListCard from "../components/ui/ListCard";
import ButtonComponent from "../components/ui/ButtonComponent";
import TextComponent from "../components/ui/TextComponent";
import { useDispatch, useSelector } from "react-redux";
import { getUserInvoices } from "../store/actions/userActions";

const InvoicesScreen = (props) => {
  
  const userToken = useSelector((state) => state.userReducer.userToken);
  const dispatch = useDispatch();
  dispatch(getUserInvoices(userToken));
  const invoices = useSelector((state) => state.userReducer.userData);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
      <View style={styles.header}>
      <TextComponent title='Invoices' fontWeight='bold' fontSize={20}/>
      <ButtonComponent form='circle' backgroundColor='white'/>
      </View>


        <FlatList
          style={styles.list}
          data={invoices}
          renderItem={({ item }) => (
        
            <ListCard
              client={item.client}
              currency_code={item.currency_code}
              date_delivery={item.date_delivery}
              date_issue={item.date_issue}
              doc_number={item.doc_number}
              format_amount={item.format_amount}
              invoiceId={item.invoiceId}
              status={item.status}
              navigation={props.navigation}
            />

               
          )}
          keyExtractor={(item) => item.invoiceId}
        />

   
      </View>
    </SafeAreaView>
  );
};

export default InvoicesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "80%",
    width: "90%",
    alignItems: "center",
  },

  header:{
  flexDirection:'row',
  width:'90%',
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:30
  },

  list: {
    width: "100%",
  },
  
});
