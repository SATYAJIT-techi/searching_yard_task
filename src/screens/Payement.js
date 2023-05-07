import { StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../components/AppButton'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import data from "../data/payement.json"

const Payement = ({ navigation }) => {
  let [radio_props, setRadio_props] = useState(0);
  let text = "+ Add new Payement";
  return (
    <View style={styles.container}>

      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
          <Image source={require('../assets/left-arrow.png')} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.headerContainText}>Select Payement Method</Text>
        <Image source={require('../assets/qr-icon.png')} style={styles.scanBtn} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          let i = 'apple-pay.png'
          // let imageArray = ['paypal-logo.png', 'paypal-logo.png', 'google-pay.png', 'apple-pay.png']

          // if(index==1)
          // i='paypal-logo.png'
          // else if(index==2)
          // i='paypal-logo.png'
          // else if(index==3)
          // i='google-pay.png'
          // else if(index==4)
          // i='apple-pay.png'

          return (
            <View style={styles.listRender}>

              <View style={styles.nameImage}>
                <Image source={require('../assets/' + i + '')} style={styles.paymentIcon} />
                <Text style={styles.payementLabels}>{item.label}</Text>
              </View>
              {
                radio_props == index ? <Text style={styles.amount}>$957.50</Text> : null
              }
              <RadioButtonInput
                obj={item}
                isSelected={radio_props == index}
                buttonInnerColor={'#25BE9B'}
                buttonOuterColor={'#25BE9B'}
                buttonSize={15}
                onPress={() => {
                  setRadio_props(index)
                }} />
            </View>
          )
        }}
      />

      <View style={styles.btnContainer}>

        <TouchableOpacity style={styles.continueBtn} onPress={() => { }}>
          <Text style={styles.addPaymentText}>+     Add new payment</Text>
        </TouchableOpacity>
      </View>

      <AppButton navigation={navigation} screenName="Vehicles" />
    </View>
  )
}

export default Payement

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    padding: 20,
    width: Dimensions.get('window').width,
  },
  backBtn: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  scanBtn: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  headerContainText: {
    fontSize: 23,
    color: '#000',
    marginRight: 60
  },
  listRender: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8faf7',
    height: 80,
    width: Dimensions.get("window").width - 40,
    marginBottom: 10
  },
  nameImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    width: 200

  },
  amount: {
    color: '#25BE9B',
  },
  paymentIcon: {
    height: 50,
    width: 50,

  },
  payementLabels: {
    fontSize: 20,
    // marginBottom: 5,
    marginLeft: 15,
    color: '#000',
    // backgroundColor:'yellow',
    width: 200
    // marginLeft:5

  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4faaf',
    marginBottom: 100,
    borderRadius: 50,
  },

  continueBtn: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    // backgroundColor:'#d3ffc2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,


  },

  addPaymentText: {
    color: '#25BE9B',
    fontSize: 20
  }
})