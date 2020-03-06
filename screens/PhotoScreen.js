import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import BackgroundWrapper from '../components/BackgroundWrapper';

import PhotoItem from '../components/PhotoItem';

import styles from '../allStyles';


export default function PhotoScreen() {
  _forms = global.Gwood.forms;
  let printPhotos = _forms.map((a, i) => {
    return <PhotoItem source={a}/>                       
  });

  return (
    <BackgroundWrapper>
    <ScrollView>  

      <View style={styles.about_hoursContainer}>
        <Text style={styles2.photo_headerText}>Some of our favorite pictures: </Text>
      </View>

      {printPhotos}


      {/* <View style={{margin:20}}></View> */}

      {/* <View style={styles.about_contentContainer}>
        <Text style={styles.about_paragraphText}>{global.Gwood.about.paragraph}</Text>
      </View> */}


    </ScrollView>

  </BackgroundWrapper>
  );
}






var glenwoodRed = '#e21f26';
var glenwoodFont = 'Montserrat';
var glenwoodFontBold = 'Montserrat-Bold';
const styles2 = StyleSheet.create({
  photo_headerText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 28,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
    paddingTop:15,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
