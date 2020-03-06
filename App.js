import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableHighlightBase, Alert, ImageBackground } from 'react-native';
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
        await Font.loadAsync({
          'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
        });
        await Font.loadAsync({
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        });

        global.BackgroundImage = './assets/images/mobileappbackground.jpeg';


        //Load from Stimulus
        const response = await fetch('https://www.glenwoodoilandgasinc.com/appinfo',{
          method: 'GET'
        }).catch(() => {
          Alert.alert(
            'Connection Failed',
            'You may not be connected to the internet.  Close the app and try again.',
            [
              {text: 'Ok'}
            ]
          );
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
  

  global.Gwood.about = new Object();
  global.Gwood.about.address = takeOutMLtags(xhtmlDom.querySelect('#about #address'));
  global.Gwood.about.phone = takeOutMLtags(xhtmlDom.querySelect('#about #phone'));
  global.Gwood.about.paragraph = takeOutMLtags(xhtmlDom.querySelect('#about #paragraph'));
  global.Gwood.about.hours = takeOutMLtags(xhtmlDom.querySelect('#about #hours'));
  global.Gwood.about.address = takeOutMLtags(xhtmlDom.querySelect('#about #address'));
  global.Gwood.about.picture = require("./assets/images/contactUs.jpg");
  
  //#region form stuff (hardcoding...sadly)  variables:  headerText, paragraph, formsNeeded
  global.Gwood.form0 = new Object();
  global.Gwood.form0.titles = global.Gwood.forms[0];
  global.Gwood.form0.headerText = takeOutMLtags(xhtmlDom.querySelect('#one #headerText'));
  global.Gwood.form0.paragraph = takeOutMLtags(xhtmlDom.querySelect('#one #paragraph'));
  global.Gwood.form0.formsNeeded = takeOutMLtags(xhtmlDom.querySelect('#one #formsNeeded'));
  global.Gwood.form0.picture = require("./assets/images/residential-propane-banner.jpg");

  global.Gwood.form1 = new Object();
  global.Gwood.form1.titles = global.Gwood.forms[1];
  global.Gwood.form1.headerText = takeOutMLtags(xhtmlDom.querySelect('#two #headerText'));
  global.Gwood.form1.paragraph = takeOutMLtags(xhtmlDom.querySelect('#two #paragraph'));
  global.Gwood.form1.formsNeeded = takeOutMLtags(xhtmlDom.querySelect('#two #formsNeeded'));
  global.Gwood.form1.picture = require("./assets/images/residential-heatingOil-banner.jpg");

  global.Gwood.form2 = new Object();
  global.Gwood.form2.titles = global.Gwood.forms[2];
  global.Gwood.form2.headerText = takeOutMLtags(xhtmlDom.querySelect('#three #headerText'));
  global.Gwood.form2.paragraph = takeOutMLtags(xhtmlDom.querySelect('#three #paragraph'));
  global.Gwood.form2.formsNeeded = takeOutMLtags(xhtmlDom.querySelect('#three #formsNeeded'));
  global.Gwood.form2.picture = require("./assets/images/residential-gasLogs-banner.jpg");

  global.Gwood.form3 = new Object();
  global.Gwood.form3.titles = global.Gwood.forms[3];
  global.Gwood.form3.headerText = takeOutMLtags(xhtmlDom.querySelect('#four #headerText'));
  global.Gwood.form3.paragraph = takeOutMLtags(xhtmlDom.querySelect('#four #paragraph'));
  global.Gwood.form3.formsNeeded = takeOutMLtags(xhtmlDom.querySelect('#four #formsNeeded'));
  global.Gwood.form3.picture = require("./assets/images/commercial-propane-banner.jpeg");

  global.Gwood.form4 = new Object();
  global.Gwood.form4.titles = global.Gwood.forms[4];
  global.Gwood.form4.headerText = takeOutMLtags(xhtmlDom.querySelect('#five #headerText'));
  global.Gwood.form4.paragraph = takeOutMLtags(xhtmlDom.querySelect('#five #paragraph'));
  global.Gwood.form4.formsNeeded = takeOutMLtags(xhtmlDom.querySelect('#five #formsNeeded'));
  //global.Gwood.form4.picture = require("./assets/images/residential-propane-banner.jpg");


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
  else return "null";
}

/**
 * an extra parsing for pictures, dont need it now cause just doing photos on device 
 * @param {string} _string must be a csv
 */
function pictureLocationParse(_string){
  
  if(_string.substring(0,6) == "inApp:")
      return '../assets/images/' + _string.substring(6); //location from the perspective of FormHeader.js
  else
      return {uri: _string};
}






const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
