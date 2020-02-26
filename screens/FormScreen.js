import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';

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

function requestxhtml() {
  var xmlRequest = new XMLHttpRequest();
  xmlRequest.addEventListener("load", justPrintResponseText);
  xmlRequest.open("GET","http://wheniskeynote.com/");
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
