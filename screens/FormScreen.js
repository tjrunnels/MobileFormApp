import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';

var DomParser = require('react-native-html-parser').DOMParser


let xhtmlTestOutput = "-xhtml-";


export default function FormScreen() {

  requestxhtml();

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


function justPrintResponseText(){
  console.log(this.responseText);
}

/**
 * takes string and looks for > then looks for < and substrings in between them
 * @param {string only} _string 
 */
function takeOutMLtags(_string){
  if(_string.includes(">"))
  {
    var returnString = _string.substring(_string.indexOf('>')+1, _string.lastIndexOf('<'));
    console.log("TAKE OUT RESULT:" + returnString);
    return returnString;
  }
  else return "INVALID_STRING - functionn:takeOutMLtags";
}

function parseResponseText(){
  let _response = this.responseText;
  let xhtmlDom = new DomParser().parseFromString(_response,'text/html');
  var before = "BEFORE:" + xhtmlDom.querySelect('#home #paragraph');
  console.log(before);
  takeOutMLtags(before);
}



function requestxhtml() {
  var xmlRequest = new XMLHttpRequest();
  xmlRequest.addEventListener("load", parseResponseText);
  xmlRequest.open("GET","https://www.glenwoodoilandgasinc.com/appinfo");
  xmlRequest.send();
  console.log("Success TOM");
  //return xmlReresponseText;
}



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
