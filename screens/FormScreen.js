import * as React from 'react';
import { StyleSheet, ImageBackground,Text, View, Button, Image, Platform, TouchableHighlight,Dimensions, KeyboardAvoidingView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import t from 'tcomb-form-native' //0.6.9
import FormClass from '../components/FormClass'
import FormHeader from '../components/FormHeader'

import style2s from '../allStyles';
import BackgroundWrapper from '../components/BackgroundWrapper';


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
    <BackgroundWrapper>      
        <KeyboardAwareScrollView
          extraHeight={10}
          extraScrollHeight={100}
        >

          <FormHeader title={formInfo.titles} picture={formInfo.picture}/>

          <View style={styles.formScreen_contentContainer}>
            <Text style={styles.formScreen_paragraphText}>{formInfo.paragraph}</Text>
          </View>

          <FormClass formsNeeded={_formsNeeded} />

      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
}


var glenwoodRed = '#e21f26';
var glenwoodFont = 'Montserrat';
var glenwoodFontBold = 'Montserrat-Bold';
var styles = StyleSheet.create({
  
  formScreen_paragraphText: {
    color: "white",
    fontFamily: glenwoodFont,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
  },

  formScreen_contentContainer: {
    padding: 15,
    backgroundColor: glenwoodRed,
  },
});