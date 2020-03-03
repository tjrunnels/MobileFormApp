import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableHighlightBase } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewNavigator from './navigation/NewNavigator';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

import styles from './allStyles';


global.itbe = "like that";
global.Gwood = new Object();
 

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
      <View style={styles.app_container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState} >
          <NewNavigator/>
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
  

  //tomdo:delete////////////////////////////////////////   Parsing   ////////////////////////////////////////////////////////////////////////////////////////////////////  Parsing
  //at this point, xthmlDom is a Domparser version of the entire glenwood html.  let the parsing begin
  global.Gwood.forms = takeOutMLtags(xhtmlDom.querySelect('#forms')).split(',');
  global.Gwood.homeheader = takeOutMLtags(xhtmlDom.querySelect('#home #headerText'));
  global.Gwood.homeParagraph = takeOutMLtags(xhtmlDom.querySelect('#home #paragraph'));
  
  //#region form stuff (hardcoding...sadly)  variables:  headerText, paragraph, formsNeeded
  global.Gwood.form0 = new Object();
  global.Gwood.form0.headerText = "testForm0 Header Text";
  global.Gwood.form0.paragraph = "testForm0 paragraph";
  global.Gwood.form0.formsNeeded = "name,email,phone,address,N,N";

  global.Gwood.form1 = new Object();
  global.Gwood.form1.headerText = "testForm1 Header Text";
  global.Gwood.form1.paragraph = "testForm1 paragraph";
  global.Gwood.form1.formsNeeded = "name,email,phone,address,N,N";

  global.Gwood.form2 = new Object();
  global.Gwood.form2.headerText = "testForm2 Header Text";
  global.Gwood.form2.paragraph = "testForm2 paragraph";
  global.Gwood.form2.formsNeeded = "name,email,phone,address,radio,N";

  global.Gwood.form3 = new Object();
  global.Gwood.form3.headerText = "testForm3 Header Text";
  global.Gwood.form3.paragraph = "testForm3 paragraph";
  global.Gwood.form3.formsNeeded = "name,email,phone,address,N,company";

  global.Gwood.form4 = new Object();
  global.Gwood.form4.headerText = "testForm4 Header Text";
  global.Gwood.form4.paragraph = "testForm4 paragraph";
  global.Gwood.form4.formsNeeded = "";

  //#endregion


  // var before = "BEFORE:" + xhtmlDom.querySelect('#home #headerText');  
  // var takeOut = takeOutMLtags(before);
  // var after = "AFTER: " + takeOut;
  // console.log(before);
  // console.log(after);
 // return takeOut;

  return "parseResponseText function...done";
}

/**
 * takes string and looks for > then looks for < and substrings in between them
 * @param {string} _string must have exactly one <tag>content</tag>
 */
function takeOutMLtags(_string){
  _string = "" + _string;
  if(_string.includes(">"))
  {
    var returnString = _string.substring(_string.indexOf('>')+1, _string.lastIndexOf('<'));
    //console.log("TAKE OUT RESULT:" + returnString);
    return returnString;
  }
  else return "INVALID_STRING - function:takeOutMLtags";
}

/**
 * takes a csv string and returns 
 * @param {string} _string must be a csv
 */
function csvCountEntries(_string){
  return _string.split(',');
}






const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
