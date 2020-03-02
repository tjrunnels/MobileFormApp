import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Platform, TouchableOpacity, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';


export default function LoadingScreen({navigation}) {

  //requestxhtml();
  return (
    <Text style={{fontSize: 50}}>Loadinng.....</Text>
  );
}



// //#region [ rgba (10, 100, 10, 0.2) ] XML HTTP REQUEST functions  ** to use, call requestxhtml();

// function requestxhtml() {
  
//   var xmlRequest = new XMLHttpRequest();
//   //xmlRequest.addEventListener("load", () => {parseResponseText});
//   xmlRequest.open("GET","https://www.glenwoodoilandgasinc.com/appinfo",false);
//   xmlRequest.send();
//   const response = await fetch('https://www.glenwoodoilandgasinc.com/appinfo'{
//     method: 'GET'
//   });
//   const responseText = await response.text();
//   var parsed = parseResponseText(responseText);
//   if (xhr.status === 200) {
//     parsed = parseResponseText(responseText);
//   }
//   console.log("requestxhtml...finished");
//   return parsed;
//   //return xmlReresponseText;

//   const response = await fetch('https://www.glenwoodoilandgasinc.com/appinfo'{
//     method: 'GET'
//  });
//   const responseText = await response.text();
//   console.log(json);

//   // var xhr = new XMLHttpRequest();     
//   // xhr.open("GET", url, false);     
//   // xhr.send();
//   // if (xhr.status === 200) {
//   //   var parsed = parseResponseText(xmlRequest.responseText);
//   // }
// }


// //*** every function below is part of event listner ****
// var DomParser = require('react-native-html-parser').DOMParser;
// function parseResponseText(responseText){
//   console.log("parsingResponse....")
//   let _response = responseText;
//   let xhtmlDom = new DomParser().parseFromString(_response,'text/html');

//   var before = "BEFORE:" + xhtmlDom.querySelect('#home #paragraph');
//   var after = "AFTER: " + takeOutMLtags(before)
//   console.log(before);
//   console.log(after);
//   return after;
//   //end of event listner
// }

// /**
//  * takes string and looks for > then looks for < and substrings in between them
//  * @param {string} _string must have exactly one <tag>content</tag>
//  */
// function takeOutMLtags(_string){
//   if(_string.includes(">"))
//   {
//     var returnString = _string.substring(_string.indexOf('>')+1, _string.lastIndexOf('<'));
//     //console.log("TAKE OUT RESULT:" + returnString);
//     return returnString;
//   }
//   else return "INVALID_STRING - function:takeOutMLtags";
// }

// function justPrintResponseText(){
//   console.log(this.responseText);
// }





//#endregion XML HTTP REQUEST functions


