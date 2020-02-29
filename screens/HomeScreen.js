import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import FormButton from '../components/FormButton';
import { MonoText } from '../components/StyledText';

import styles from '../allStyles';

export default function HomeScreen({navigation}) {

  //variables
  const home_front_logo = <Image source={require("../assets/images/300x200.png")} style={{width:300}}/>;

  var _forms = global.Gwood.forms;

  return (
    <View style={styles.home_container}>
      {/* <DevelopmentModeNotice /> */}

       {/* Top, main logo on home page */}
       <View style={styles.home_welcomeContainer}>
          {home_front_logo}
          <Text style = {styles.home_getStartedText}>{global.Gwood.homeheader}</Text>
      </View>

      <ScrollView style={styles.home_container} contentContainerStyle={styles.home_contentContainer}>


        <View style={styles.home_getStartedContainer}>   

         <Text>{global.Gwood.homeParagraph}</Text>

         
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
          </View>


          {/* old home screen stuff can be found at the bottom region "old home" */}
        </View>


        <View style={styles.home_helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.home_helpLink}>
            <Text style={styles.home_helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.home_helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.home_developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.home_developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}


 //#region old home screen
          // <TouchableOpacity 
          // style={styles.home_formButton} 
          // onPress={() => navigation.navigate('Form')}
          // >
          //     <Text style={styles.home_formButtonText}>Form</Text>
          // </TouchableOpacity>

          // <TouchableOpacity 
          // style={styles.home_formButton} 
          // onPress={() => navigation.navigate('Loading')}
          // >
          //     <Text style={styles.home_formButtonText}>Loading</Text>
          // </TouchableOpacity>
          // <TouchableOpacity 
          // style={styles.home_formButton} 
          // onPress={() => navigation.navigate('Links')}
          // >
          //     <Text>Links</Text>
          // </TouchableOpacity>         
 //#endregion