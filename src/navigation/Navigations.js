import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vehicles from '../screens/Vehicles';
import Charger from '../screens/Charger';
import Booking from '../screens/Booking';
import Payement from '../screens/Payement';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Vehicles'>
        <Stack.Screen name='Vehicles' component={Vehicles} options={{headerShown:false}}/>
        <Stack.Screen name='Charger' component={Charger} options={{headerShown:false}}/>
        <Stack.Screen name='Booking' component={Booking} options={{headerShown:false}}/>
        <Stack.Screen name='Payement' component={Payement} options={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigations

const styles = StyleSheet.create({})