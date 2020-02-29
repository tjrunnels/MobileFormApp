import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewNavigator from './navigation/NewNavigator';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

global.itbe = "like that";
global.itbebefore = "balnks";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });

        //Load from Stimulus
        const response = await fetch('https://www.glenwoodoilandgasinc.com/appinfo',{
          method: 'GET'
        });
        const responseText = await response.text();
        var parsed = parseResponseText(responseText);
        console.log("parsed code running in app.js: " + parsed);
        parsed += "--APP.JS STAMP--";
        global.itbe = parsed;


      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <NewNavigator />
        </NavigationContainer>
      </View>
    );
  }
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*** Custom Functions ****
var DomParser = require('react-native-html-parser').DOMParser;
function parseResponseText(responseText){
  console.log("parsingResponse....")
  let _response = responseText;
  let xhtmlDom = new DomParser().parseFromString(_response,'text/html');

  var before = "BEFORE:" + xhtmlDom.querySelect('#home #paragraph');  
  global.itbebefore=before;
  var takeOut = takeOutMLtags(before);
  var after = "AFTER: " + takeOut;
  console.log(before);
  console.log(after);
  return takeOut;
  //end of event listner
}

/**
 * takes string and looks for > then looks for < and substrings in between them
 * @param {string} _string must have exactly one <tag>content</tag>
 */
function takeOutMLtags(_string){
  if(_string.includes(">"))
  {
    var returnString = _string.substring(_string.indexOf('>')+1, _string.lastIndexOf('<'));
    //console.log("TAKE OUT RESULT:" + returnString);
    return returnString;
  }
  else return "INVALID_STRING - function:takeOutMLtags";
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
