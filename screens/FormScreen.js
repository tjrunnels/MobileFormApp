import * as React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from '../allStyles';



let xhtmlTestOutput = "-xhtml-";


export default function FormScreen({route,navigation}) {

  if(global.Gwood.formChosen == null) {
    return(
      <View>
        <Text style={{fontSize:30, color:"red"}}>invalid formID.  Please restart the App</Text>
      </View>
    )
  }
  //xhtmlTestOutput = route.params.xhtmltest;

 // requestxhtml();
  const form_header_image = <Image source={require("../assets/images/300x200.png")} style={{width:300}}/>;
  //var id = global.Gwood.formChosen;



  return (
    <View>
    {form_header_image}

    <View>
    <Text style = {styles.home_getStartedText}>HT:</Text>
    <Text style = {styles.home_getStartedText}>Paragraph:</Text>

    <Text style = {styles.home_getStartedText}>Name</Text>
    <Text style = {styles.home_getStartedText}>email</Text>
    <Text style = {styles.home_getStartedText}>phone</Text>
    <Text style = {styles.home_getStartedText}>address</Text>
    <Text style = {styles.home_getStartedText}>radio</Text>
    <Text style = {styles.home_getStartedText}>company</Text>
    </View>

{/* 
      
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
      /> */}

      <View style={styles.form_getStartedContainer}>   
        <Text>This will be where all the forms are and junk heck yeah yeet</Text>
        <Text>{xhtmlTestOutput}</Text>
      </View>

    </View>

  );
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
