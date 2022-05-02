import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import TextComponent from "../ui/TextComponent";
import LogoComponent from "../ui/LogoComponent";
import DividerComponent from "../ui/DividerComponent";
import RowComponent from "../ui/RowComponent";

const InvoiceComponent = (props) => {
  console.log(props);

  return (

    <View style={styles.invoiceCard}>

      <View style={styles.invoiceHeader}>
        <LogoComponent scale={100} />
        <TextComponent title={props.companyName} marginTop={20} fontWeight='bold' />
        <TextComponent title={props.address} />
        <TextComponent title={props.city} />
      </View>

      <DividerComponent />

      <RowComponent
        fontSize={14}
        marginTop={10}
        titleLeft='Invoice:'
        fontWeightLeft='bold'
        titleRight={props.invoiceId}
      />

      <RowComponent
        fontSize={14}
        marginTop={10}
        titleLeft='Bill To:'
        fontWeightLeft='bold'
        titleRight={props.companyName}
      />

      <RowComponent
        fontSize={14}
        marginTop={20}
        titleLeft='Amount:'
        fontWeightLeft='bold'
        titleRight={props.total}
      />

      <RowComponent
        fontSize={14}
        marginTop={10}
        titleLeft='EXPIRE DATE:'
        fontWeightLeft='bold'
        titleRight={props.ncfExpirationDate}
      />

      <TextComponent
        textAlign='left'
        title='Items'
        fontWeight='bold'
        marginTop={50}
      />

      <DividerComponent />

      <RowComponent
        titleLeft='Product/Service:'
        fontWeightLeft='bold'
        titleRight={props.invoiceId}
      />

      <RowComponent
        fontSize={12}
        titleLeft='Quantity:'
        fontWeightLeft='bold'
        titleRight={props.total}
        marginTop={10}
      />

      <DividerComponent />

      <RowComponent
        fontSize={20}
        titleLeft='Total:'
        fontWeightLeft='bold'
        titleRight={props.total}
      />
    </View>
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
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'
  },

});
