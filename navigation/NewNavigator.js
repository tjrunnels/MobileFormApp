import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import AboutScreen from '../screens/AboutScreen';
import PhotoScreen from '../screens/PhotoScreen';
//NEWSCREEN you have to add new screens here ^

import styles from '../allStyles';

const Stack = createStackNavigator();
export default function NewNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Form" component={FormScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="About" component={AboutScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Photos" component={PhotoScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
    </Stack.Navigator>
  );
}