import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import TextComponent from "../ui/TextComponent";
import LogoComponent from "../ui/LogoComponent";
import DividerComponent from "../ui/DividerComponent";
import RowComponent from "../ui/RowComponent";
import OpeningModalComponent from "../ui/OpeningModalComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const InvoiceComponent = (props) => {
  const invoice = props.invoice;
  const senderInfo = props.invoiceSpec.header;
  const clientInfo = props.invoiceSpec.header;
  const productInfo = props.invoiceSpec.items[0];

  return (
    <ScrollView style={styles.invoiceCard}>
      <View style={styles.invoiceHeader}>
        <LogoComponent scale={100} />
        <Image
          style={{ width: 100, height: 50 }}
          source={{
            uri:
              "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
          }}
        />
        <TextComponent
          title={senderInfo.company_name}
          marginTop={20}
          fontWeight='bold'
        />
        <TextComponent title={senderInfo.company_address1} />
        <TextComponent title={clientInfo.company_city} />
      </View>

      <RowComponent
        fontSize={14}
        marginTop={20}
        titleLeft={"Factura"}
        fontWeightLeft='bold'
        titleRight={invoice.doc_number}
      />

      <RowComponent
        fontSize={14}
        marginTop={10}
        titleLeft='NCF'
        fontWeightLeft='bold'
        titleRight={senderInfo.ncf}
      />

      <RowComponent
        fontSize={14}
        marginTop={10}
        titleLeft='Valido hasta'
        fontWeightLeft='bold'
        titleRight={senderInfo.ncf_expiration_date}
      />

      <DividerComponent/>

      <OpeningModalComponent
        headerTitle={{titleLeft:'Cliente', titleRight: clientInfo.client}}
        titles={[
          { titleLeft: "RCN",     titleRight: clientInfo.client_rnc },
          { titleLeft: "Address", titleRight: clientInfo.client_address1 },
          { titleLeft: "City",    titleRight: clientInfo.client_city },
          { titleLeft: "Email",   titleRight: clientInfo.client_email },
          { titleLeft: "Phone",   titleRight: clientInfo.client_phone }
        ]}
      />

        <OpeningModalComponent
        headerTitle={{titleLeft:'Items', titleRight: productInfo.product}}
        titles={[
          { titleLeft: "Description",    titleRight: productInfo.description },
          { titleLeft: "Disc",           titleRight: productInfo.quantity },
          { titleLeft: "Price",          titleRight: productInfo.price },
          { titleLeft: "Quantity",       titleRight: productInfo.quantity },
          { titleLeft: "Tax",            titleRight: productInfo.tax },
          { titleLeft: "Discount",       titleRight: clientInfo.discount_amount },
          
        ]}
      />
    
      <RowComponent
        fontSize={20}
        titleLeft='Total'
        fontWeightLeft='bold'
        titleRight={invoice.format_amount}
      />
    </ScrollView>
  );
};

export default InvoiceComponent;

const styles = StyleSheet.create({
  invoiceCard: {
    padding: 30,
    marginTop: 30,
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  invoiceContent: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  productContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  invoiceHeader: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
