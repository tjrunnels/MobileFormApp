import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import FormScreen from '../screens/FormScreen';
import LoadingScreen from '../screens/LoadingScreen';
//NEWSCREEN you have to add new screens here too ^

const BottomTab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    //bottomtab navigator element
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {/* homes page element */}
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      {/* Link page element */}
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      {/* form element (DEV) */}
      <BottomTab.Screen
        name="Form"
        component={FormScreen}
        options={{
          title: 'Form',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      {/* form element (DEV) */}
      <BottomTab.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          title: 'Loading',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

      {/* NEWSCREEN add new page elements here */}

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
    case 'Form':
      return 'Fill out a form and we\'ll get back to you';
    case 'Loading':
      return 'loading';

    //NEWSCREEN should prob add one of these too ^
  }
}
