import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';



let xhtmlTestOutput = "-xhtml-";


export default function FormScreen({route,navigation}) {

  //xhtmlTestOutput = route.params.xhtmltest;

 // requestxhtml();
  return (
    <ScrollView style={styles.form_container} contentContainerStyle={styles.form_contentContainer}>
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />

      <View style={styles.form_getStartedContainer}>   
        <Text>This will be where all the forms are and junk heck yeah yeet</Text>
        <Text>{xhtmlTestOutput}</Text>
      </View>

    </ScrollView>


  );
}

// //#region REACT FETCH functions      **call fetchFromStimulus();
// function fetchFromStimulus() {
//   var t = async () => {
//     var url = 'https://www.glenwoodoilandgasinc.com/appinfo';
//     var _result = (await fetch(url)).resp.text();//'no result get rekt';
//   // await fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ console.log(text) })
//     console.log("fetch result be like5: " + _result);
//   }
//   t();
// }
// //#endregion REACT FETCH functions

// //#region [ rgba (10, 100, 10, 0.2) ] XML HTTP REQUEST functions  ** to use, call requestxhtml();

// var DomParser = require('react-native-html-parser').DOMParser


// function justPrintResponseText(){
//   console.log(this.responseText);
// }

// /**
//  * takes string and looks for > then looks for < and substrings in between them
//  * @param {string} _string must have exactly one <tag>content</tag>
//  */
// function takeOutMLtags(_string){
//   if(_string.includes(">"))
//   {
//     var returnString = _string.substring(_string.indexOf('>')+1, _string.lastIndexOf('<'));
//     console.log("TAKE OUT RESULT:" + returnString);
//     return returnString;
//   }
//   else return "INVALID_STRING - function:takeOutMLtags";
// }

// function parseResponseText(){
//   let _response = this.responseText;
//   let xhtmlDom = new DomParser().parseFromString(_response,'text/html');
//   var before = "BEFORE:" + xhtmlDom.querySelect('#home #paragraph');
//   console.log(before);
//   this.state = {updated: true};
// }



// function requestxhtml() {
//   var xmlRequest = new XMLHttpRequest();
//   xmlRequest.addEventListener("load", parseResponseText);
//   xmlRequest.open("GET","https://www.glenwoodoilandgasinc.com/appinfo");
//   xmlRequest.send();
//   console.log("Success TOM");
//   //return xmlReresponseText;
// }
// //#endregion XML HTTP REQUEST functions


function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.form_option, isLastOption && styles.form_lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.form_optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.form_optionTextContainer}>
          <Text style={styles.form_optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}
