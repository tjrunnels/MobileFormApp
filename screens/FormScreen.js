import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform, TouchableHighlight,Dimensions  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import t from 'tcomb-form-native' //0.6.9
import FormClass from '../components/FormClass'

import styles from '../allStyles';

let xhtmlTestOutput = "-xhtml-"; //tomdo: delete

export default function FormScreen({route,navigation}) {

  //error page if the form page was reached out of use case
  if(global.Gwood.formChosen == null) {
    return(
      <View>
        <Text style={{fontSize:30, color:"red"}}>invalid formID.  Please restart the App</Text>
      </View>
    )
  }

  //varaibles
    const form_header_image = <Image source={require("../assets/images/form.jpg")} style={{width: Dimensions.get('window').width}}/>;
    var formInfo;
    //#region assigning formInfo the correct info based on formChosen
    switch(global.Gwood.formChosen) {
      case 0:
        formInfo = global.Gwood.form0; break;
      case 1:
        formInfo = global.Gwood.form1; break;
      case 2:
        formInfo = global.Gwood.form2; break;
      case 3:
        formInfo = global.Gwood.form3; break;
      case 4:
        formInfo = global.Gwood.form4; break;
      default: 
        formInfo = global.Gwood.form0; //hopefully we never get to this....
    }
    //#endregion
    var _formsNeeded = ("" + formInfo.formsNeeded).split(',');

  return (
    <View style={styles.home_container}>
    {form_header_image}
    <ScrollView>

{/*       
    <View>
    <Text style = {styles.home_getStartedText}>{formInfo.headerText}</Text>
    <Text style = {styles.home_getStartedText}>{formInfo.paragraph}</Text>

    {_formsNeeded[0] == "N" ? null : <Text style = {styles.home_getStartedText}>Name</Text>}
    {_formsNeeded[1] == "N" ? null : <Text style = {styles.home_getStartedText}>email</Text>}
    {_formsNeeded[2] == "N" ? null : <Text style = {styles.home_getStartedText}>phone</Text>}
    {_formsNeeded[3] == "N" ? null : <Text style = {styles.home_getStartedText}>address</Text>}
    {_formsNeeded[4] == "N" ? null : <Text style = {styles.home_getStartedText}>radio</Text>}
    {_formsNeeded[5] == "N" ? null : <Text style = {styles.home_getStartedText}>company</Text>}

    </View> */}

    <FormClass 
      formsNeeded={_formsNeeded}
    />

      </ScrollView>

    </View>
  );
}


function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.form_option, isLastOption && styles.form_lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.form_optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(100,0,0,0.35)" />
        </View>
        <View style={styles.form_optionTextContainer}>
          <Text style={styles.form_optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}



