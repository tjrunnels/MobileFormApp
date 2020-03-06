import * as React from 'react';
import { Image, Platform, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import FormButton from '../components/FormButton';
import { MonoText } from '../components/StyledText';

import BackroundWrapper from '../components/BackgroundWrapper';

import styles from '../allStyles';

export default function HomeScreen({navigation}) {


  //variables
  const home_front_logo = <Image source={require("../assets/images/gwood.png")} style={{width:350}}/>;
  _forms = global.Gwood.forms;

  return (
    <BackroundWrapper>
    {/* <DevelopmentModeNotice /> */}
      <ScrollView style={styles.home_container} contentContainerStyle={styles.home_contentContainer}>

        {/* Top, main logo on home page */}
        <View style={styles.home_welcomeContainer}>
            {home_front_logo}
            <Text style = {styles.home_welcomeText}>{global.Gwood.homeheader}</Text>
        </View>



        <View style={styles.home_getStartedContainer}>   

         <Text style={styles.home_paragraph}>{global.Gwood.homeParagraph}</Text>

         
         {/*   -Okay this is a lot.  first off, I know this is bad form.  i couldn't quite think of a way to do this with forEach
              -What it does:   
                if there is a form, display a FormButton which has name of form[index] and other parameters (suffix is just proof of concept
                onPress, it sets the formChosen global variable to the index and navigates to the form screen     */}
          <View>
            {_forms[0] == null ? null : <FormButton name={_forms[0]} suffix="suf" onPress={() => {global.Gwood.formChosen=0; navigation.navigate('Form');}}/>}
            {_forms[1] == null ? null : <FormButton name={_forms[1]} suffix="suf" onPress={() => {global.Gwood.formChosen=1; navigation.navigate('Form');}}/>}
            {_forms[2] == null ? null : <FormButton name={_forms[2]} suffix="suf" onPress={() => {global.Gwood.formChosen=2; navigation.navigate('Form');}}/>}
            {_forms[3] == null ? null : <FormButton name={_forms[3]} suffix="suf" onPress={() => {global.Gwood.formChosen=3; navigation.navigate('Form');}}/>}
            {_forms[4] == null ? null : <FormButton name={_forms[4]} suffix="suf" onPress={() => {global.Gwood.formChosen=4; navigation.navigate('Form');}}/>}
          
          
            <FormButton name="About Us" onPress={()=>{navigation.navigate('About')}} />

            <FormButton name="Photos" onPress={()=>{navigation.navigate('Photos')}} />

            <FormButton name="Give us a call!" onPress={()=>{Linking.openURL(`tel:${global.Gwood.about.phone}`)}} />


          </View>

            

          {/* old home screen stuff can be found at the bottom region "old home" */}
        </View>

        {/* bottom spacing */}
        <View style={{padding:20}}></View>

      </ScrollView>
    </BackroundWrapper> 
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}