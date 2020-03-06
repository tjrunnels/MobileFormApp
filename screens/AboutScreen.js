import * as React from 'react';
import { Platform,StyleSheet, Text, View, Image, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

//import styles from "../allStyles";
import BackgroundWrapper from '../components/BackgroundWrapper';
import FormHeader from '../components/FormHeader';

import styles from '../allStyles';

var yeet = "asdflkenfaoinasdfawefavawefcaeif";

var iosURL = "https://maps.apple.com/?address=2074%20Smith%20Mountain%20Lake%20Pkwy,%20Unit%205,%20Huddleston,%20VA%20%2024104,%20United%20States&auid=2266961395205873666&ll=37.178076,-79.433392&lsp=9902&q=Glenwood%20Oil%20%26%20Gas,%20Propane&_ext=ChoKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQABImKcHuhQQ4lkJAMe4sew0Z3FPAOT/Eq2Bel0JAQXSAcFRg21PAUAM%3D";
var gogURL = "https://www.google.com/maps/place/Glenwood+Oil+%26+Automotive/@37.1785922,-79.4358195,16.69z/data=!4m5!3m4!1s0x884d359b0ffefb8f:0x52aebc27a893d63d!8m2!3d37.1784208!4d-79.4331989";
var mapUrl = Platform.OS === 'ios' ? iosURL : gogURL;

export default function AboutScreen() {

  return (
    <BackgroundWrapper>
    <ScrollView>  

      <FormHeader title={"About Us"} picture={global.Gwood.about.picture}/>
    
      <View style={styles.about_contentContainer}>
        <Text style={styles.about_paragraphText}>{global.Gwood.about.paragraph}</Text>
      </View>

      <View style={styles.about_mapContainer}>
        <Text style={styles.about_mapText}>{global.Gwood.about.address}</Text>
      </View>
      <TouchableHighlight onPress={()=>{ Linking.openURL(mapUrl)}}>
        <Image 
          style={styles.about_mapImage} 
          source={require("../assets/images/mapScreenshot2.png")} 
          onPress
        />
      </TouchableHighlight>

      <View style={styles.about_hoursContainer}>
        <Text style={styles.about_hourText}>Our Hours: </Text>
        <Text style={styles.about_mapText}>{formatHours(global.Gwood.about.hours)}</Text>
      </View>

      <View style={styles.about_phoneContainer}>
        <Text style={styles.about_mapText}>Give us a call!</Text>
        <Text style={styles.about_phoneText}>{formatPhone(global.Gwood.about.phone)}</Text>
      </View>



    </ScrollView>

  </BackgroundWrapper>
  );
}

function formatPhone(_string) {
  var toReturn = _string.substring(0,3) + "-" + _string.substring(3,6) + "-" + _string.substring(6);
  return toReturn;
}
function formatHours(_string) {
  var toReturn = "";
   toReturn += "Monday:\t\t\t" + _string.substring(_string.indexOf("M:") + 2, _string.indexOf("T:")) +"\n";
   toReturn += "Tuesday:\t\t\t" + _string.substring(_string.indexOf("T:") + 2, _string.indexOf("W:"))+"\n";;
   toReturn += "Wednesday:\t\t" + _string.substring(_string.indexOf("W:") + 2, _string.indexOf("R:"))+"\n";;
   toReturn += "Thursday:\t\t" + _string.substring(_string.indexOf("R:") + 2, _string.indexOf("F:"))+"\n";;
   toReturn += "Friday:\t\t\t" + _string.substring(_string.indexOf("F:") + 2, _string.indexOf("S:"))+"\n";;
   toReturn += "Saturday:\t\t" + _string.substring(_string.indexOf("S:") + 2, _string.indexOf("U:"))+"\n";;
   toReturn += "Sunday:\t\t\t" + _string.substring(_string.indexOf("U:") + 2);

  return toReturn;
}


var glenwoodRed = '#e21f26';
var glenwoodFont = 'Montserrat';
var glenwoodFontBold = 'Montserrat-Bold';

const styles2 = StyleSheet.create({
  about_container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  about_mapImage: {
    width: Dimensions.get('window').width,           
    height:210,
  },
  about_mapContainer: {
    backgroundColor: "black",
    textAlign: "center",
    padding:7,
  },
  about_hoursContainer: {
    backgroundColor: "black",
    textAlign: "center",
    paddingBottom:15,
  },
  about_phoneContainer: {
    backgroundColor: glenwoodRed,
    textAlign: "center",
  },
  about_hourText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 28,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
    paddingTop:15,
  },
  about_phoneText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 25,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
    paddingBottom:40,
  },
  about_mapText: {
    color: "white",
    fontFamily: glenwoodFontBold,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
    alignSelf: "center",
    padding:10,
  },
  about_paragraphText: {
    color: "white",
    fontFamily: glenwoodFont,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  about_contentContainer: {
    padding: 15,
    backgroundColor: glenwoodRed,
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
