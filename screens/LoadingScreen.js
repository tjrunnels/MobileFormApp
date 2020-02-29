import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Platform, TouchableOpacity, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';


export default function LoadingScreen({navigation}) {


  return (
    <Text style={{fontSize: 50}}>Loadinng.....</Text>
  );
}



//#region [ rgba (10, 100, 10, 0.2) ] XML HTTP REQUEST functions  ** to use, call requestxhtml();
var DomParser = require('react-native-html-parser').DOMParser;

function requestxhtml() {
  
  var xmlRequest = new XMLHttpRequest();
  xmlRequest.addEventListener("load", () => {parseResponseText});
  xmlRequest.open("GET","https://www.glenwoodoilandgasinc.com/appinfo");
  xmlRequest.send();
  console.log("requestxhtml...finished");
  //return xmlReresponseText;

}


//*** every function below is part of event listner ****

function parseResponseText(){
  console.log("parsingResponse....")
  let _response = this.responseText;
  let xhtmlDom = new DomParser().parseFromString(_response,'text/html');

  var before = "BEFORE:" + xhtmlDom.querySelect('#home #paragraph');
  var after = "AFTER: " + takeOutMLtags(before)
  console.log(before);
  console.log(after);
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

function justPrintResponseText(){
  console.log(this.responseText);
}





//#endregion XML HTTP REQUEST functions


