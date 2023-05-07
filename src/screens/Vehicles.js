import { StyleSheet, Text, View, Button, Image, FlatList, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import data from "../data/data.json"
import AppButton from '../components/AppButton'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const Vehicles = ({ navigation }) => {
  let [radio_props, setRadio_props] = useState(0)



  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Vehicles')}>
          <Image source={require('../assets/left-arrow.png')} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.headerContainText}>Select Your Vehicle</Text>
        <Text style={styles.addBtn}>+</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listRender}>
              <View style={styles.carImg}>
                {/* <Image /> */}
                <Image source={require('../assets/car_img.png')} style={styles.carImgComponent} />
              </View>
              <View style={styles.details}>
                <Text style={styles.carName}>{item.name}</Text>
                <View style={styles.description}>
                  <Text>{item.description1}</Text>
                  <Text>-</Text>
                  <Text >{item.description2}</Text>
                </View>
              </View>
              <View>
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

            </View>
          )
        }}

      />

      {/* <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Charger')}>
        <Text style={{color:'white'}}>Continue</Text>
      </TouchableOpacity> */}
      <AppButton navigation={navigation} screenName="Charger" />

    </View>
  )
}

export default Vehicles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
    marginRight: 120
  },
  addBtn:{
    fontSize: 30,
  },
  listRender: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f8faf7",
    height: 100,
    width: Dimensions.get("window").width - 30,
    marginBottom: 10
  },

  carImg: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    
    
  },
  carImgComponent:{
    height: 80,
    width: 80,
  },
  details: {
    // backgroundColor: 'yellow',
    height: 60,
    width: 200,
    marginLeft: 10,
    justifyContent: "space-around",
    borderLeftWidth:1,
    borderColor:'grey'
  },
  carName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color:'#000'
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-around",
   alignContent:'flex-start',
    // backgroundColor: 'pink',
    marginLeft: 10,
    width: 109,
  }
})