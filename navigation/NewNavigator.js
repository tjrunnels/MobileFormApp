import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import FormScreen from '../screens/FormScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AboutScreen from '../screens/AboutScreen';
import PhotoScreen from '../screens/PhotoScreen';

//NEWSCREEN you have to add new screens here too ^
import styles from '../allStyles';



const Stack = createStackNavigator();

export default function NewNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Links" component={LinksScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Form" component={FormScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle }}/>
      <Stack.Screen name="About" component={AboutScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
      <Stack.Screen name="Photos" component={PhotoScreen} options={{headerStyle: styles.navigatorStyle, headerTintColor: "#FFFFFF", headerTitleStyle: styles.navigator_headerTitleStyle}}/>
    </Stack.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <NewNavigator />
//     </NavigationContainer>
//   );
// }
