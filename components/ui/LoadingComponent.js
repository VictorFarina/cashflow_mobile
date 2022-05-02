import { StyleSheet, Text, View ,SafeAreaView, ActivityIndicator} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import LogoComponent from '../ui/LogoComponent'

import logo from '../../assets/images/cashflow-logo-text.png'

const LoadingComponent = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <LogoComponent width={236} height={40} logo={logo} marginTop={30} />
         <ActivityIndicator size="large" color={Colors.cashFlowBlue} />
    </SafeAreaView>
  )
}

export default LoadingComponent

const styles = StyleSheet.create({

    screen: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: "center",
    justifyContent: "center",
  },


  container: {
    height: "80%",
    width: "80%",
    alignItems: "center",
  },

})