import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const AppButton = ({ navigation, screenName }) => {
  return (
    <View style={styles.btnContainer}>

      <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate(screenName)}>
        <Text style={{ color: 'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppButton

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueBtn: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    backgroundColor: "#25BE9B",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
    borderRadius: 50
  },
})