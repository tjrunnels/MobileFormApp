import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

//import styles from "../allStyles";
import BackgroundWrapper from '../components/BackgroundWrapper';
import FormHeader from '../components/FormHeader';

var yeet = "asdflkenfaoinasdfawefavawefcaeif";

export default function AboutScreen() {
  return (
    <BackgroundWrapper>
    <FormHeader title={"About Us"} picture={global.Gwood.AboutPicture}/>
    
    <ScrollView>
      <Text style={{color:"white"}}>{yeet}</Text>
      <Text style={{color:"white"}}>{yeet}</Text>

      <Text style={{color:"white"}}>{yeet}</Text>

      <Text style={{color:"white"}}>{yeet}</Text>

    </ScrollView>

  </BackgroundWrapper>
  );
}


const styles = StyleSheet.create({
  about_container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  about_contentContainer: {
    paddingTop: 15,
  },
  about_optionIconContainer: {
    marginRight: 12,
  },
  about_option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  about_lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  about_optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
