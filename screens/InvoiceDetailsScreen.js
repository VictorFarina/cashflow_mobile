import { StyleSheet, Text, View , ActivityIndicator} from "react-native";
import TextComponent from "../components/ui/TextComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import InvoiceComponent from "../components/invoiceComponent/InvoiceComponent";
import { useDispatch, useSelector } from "react-redux";
import { showInvoice } from "../store/actions/invoiceActions";
import { useState, useEffect } from "react";


const InvoiceDetailsScreen = (props) => {
 

  
  const invoice = props.route.params.props;
  const userToken = useSelector((state) => state.userReducer.userToken);
  const invoiceSpec = useSelector((state) => state.invoiceReducer.invoice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showInvoice(invoice.invoiceId, userToken));
  }, []);
  
  return (

    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          { !invoiceSpec.header ? <ActivityIndicator/> : <InvoiceComponent invoice={invoice} invoiceSpec={invoiceSpec} />  }
        </View>
      </View>
    </View>
  );

};

export default InvoiceDetailsScreen;

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",

  },

  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  header: {
    width: "100%",
  },
});
