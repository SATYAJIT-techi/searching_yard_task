import { Button, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../components/AppButton'
import charger from "../data/charger.json"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const Charger = ({ navigation }) => {
  let [radio_props, setRadio_props] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Vehicles')}>
          <Image source={require('../assets/left-arrow.png')} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.headerContainText}>Select Charger</Text>
      </View>
      <FlatList
        data={charger}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listRender}>

              <View style={styles.detailsSec}>

                <View style={styles.nameImage}>

                  <View style={styles.firstDetails}>
                  <Text>{item.label}</Text>
                  <Text>{item.description}</Text>
                  </View>
                  <Image source={require('../assets/vector-icon.png')}  style={{height:40,width:40,marginTop:9}} />
                  {/* <Image /> or any vector icon */}
                </View>

                <View style={styles.powerSection}>

                  <Text>{item.power}</Text>
                  <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#000' }}>{item.voltage}</Text>

                </View>

              </View>

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
      <AppButton navigation={navigation} screenName="Booking" />

    </View>
  )
}

export default Charger

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    justifyContent: 'space-between',
    padding: 20,
    // backgroundColor:'pink',
    width: "100%",
  },
  backBtn: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  headerContainText: {
    fontSize: 23,
    color: '#000',
    marginRight: 190
  },
  listRender: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f8faf7",
    height: 100,
    width: Dimensions.get("window").width - 20,
    marginBottom: 10
  },
  detailsSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'pink',
    marginRight: 30,
    width: Dimensions.get("window").width - 150,
    height: 80,
    
    
  },
  nameImage: {
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: 60,
    width: 130,
    marginTop: 10,
    borderRightWidth:1,
    borderColor:'grey'
  },
  firstDetails:{
    justifyContent:'space-between',
    width: 70,
    flexDirection:'row'
  },
  powerSection: {
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    marginRight: 30,
  }

})