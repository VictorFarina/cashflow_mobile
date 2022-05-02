import { StyleSheet, Text, View , ActivityIndicator} from "react-native";
import TextComponent from "../components/ui/TextComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import InvoiceComponent from "../components/invoiceComponent/InvoiceComponent";

import { useDispatch, useSelector } from "react-redux";
import { showInvoice } from "../store/actions/userActions";
import { useState, useEffect } from "react";

const InvoiceDetailsScreen = (props) => {

  const invoiceId = props.route.params.props;
  const userToken = useSelector((state) => state.userReducer.userToken);
  const invoice = useSelector((state) => state.userReducer.invoice);
  const dispatch = useDispatch();

  console.log(invoice.items);

  
  useEffect(() => {
    dispatch(showInvoice(invoiceId, userToken));
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextComponent
            textAlign='left'
            title='Invoice'
            fontWeight='bold'
            fontSize={20}
          />
        </View>
        { 
        invoice.header ? 
        <InvoiceComponent 
            invoiceId={invoice.header.invoiceId}
            address={invoice.header.company_address1}
            companyName={invoice.header.company_name}
            total={invoice.header.total}
            ncfExpirationDate={invoice.header.ncf_expiration_date}
            city={invoice.header.company_city} 
            product={invoice.items.product}
            quantity={invoice.items.quantity}
            client={invoice.items.quantity}/>
            : 
            <ActivityIndicator />  
          }
        <ButtonComponent />
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
    width: "80%",
    alignItems: "center",
  },

  header: {
    width: "100%",
  },
});
